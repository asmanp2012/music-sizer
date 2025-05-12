import pandas as pd
import json
import os
from pathlib import Path
import numpy as np
import sys
from warnings import simplefilter

simplefilter(action="ignore", category=pd.errors.PerformanceWarning)

def save_dataframe_to_csv(df, file_path, transpose=False):
    if transpose:
        df = df.transpose()
    if file_path.is_file():
        file_path.unlink()
    df.to_csv(file_path, mode='x', index=False)

def get_input_file_path():
    if len(sys.argv) > 1:
        return sys.argv[1]
    return input('Please input your audio file name: ')

def load_json(file_path):
    try:
        with open(file_path) as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f'Error loading JSON file: {e}')
        exit()

def list_bpm_folders(output_directory):
    bpm_data_dir = Path(output_directory)
    return [folder for folder in bpm_data_dir.iterdir() if folder.is_dir()]

def calculate_threshold(data, multiplier=1):
    std_dev = np.std(data)
    return multiplier * std_dev

def calculate_iqr_threshold(data):
    Q1 = np.percentile(data, 25)
    Q3 = np.percentile(data, 75)
    IQR = Q3 - Q1
    return Q3 + 1.5 * IQR  # آستانه بالایی

def calculate_dynamic_threshold(data):
    std_dev_threshold = calculate_threshold(data, multiplier=1)
    iqr_threshold = calculate_iqr_threshold(data)
    return min(std_dev_threshold, iqr_threshold)

def detect_time_signature(frequencies_data):
    # لیست مخرج‌های کسر
    denominators = [2, 4, 8, 16]
    time_signatures = {}

    # محاسبه آستانه
    threshold = calculate_dynamic_threshold(frequencies_data.iloc[:, 0])
    print(f"Threshold: {threshold}")

    # شناسایی کم‌صدا‌ترین بیت و ایندکس آن
    min_loudness_index = frequencies_data.iloc[:, 2].idxmin()  # ایندکس کم‌صدا‌ترین بیت
    min_loudness_value = frequencies_data.iloc[min_loudness_index, 2]  # مقدار صدای کم‌صدا‌ترین بیت

    # محاسبه فاصله بین تکرارهای کم‌صدا‌ترین بیت
    quietest_bit_indices = frequencies_data.index[frequencies_data.iloc[:, 2] == min_loudness_value].tolist()
    distances = [quietest_bit_indices[i] - quietest_bit_indices[i - 1] for i in range(1, len(quietest_bit_indices))]
    
    if distances:
        average_distance = sum(distances) / len(distances)
        max_distance = max(distances)  # حداکثر فاصله
    else:
        average_distance = None
        max_distance = None

    print(f"Quietest Bit Value: {min_loudness_value}, Average Distance: {average_distance}")

    for denom in denominators:
        if max_distance is not None and denom > max_distance:
            continue  # اگر denom بزرگتر از max_distance باشد، ادامه بده

        for start in range(0, frequencies_data.shape[0], denom):
            end = start + denom
            if end > frequencies_data.shape[0]:
                break
            
            segment = frequencies_data.iloc[start:end, :]
            
            # محاسبه تغییرات بین فرکانس‌های متوالی
            changes = segment[segment.columns[0]].diff().fillna(0)  # ستون اول فرکانس

            # شناسایی تعداد تغییرات مثبت و منفی با توجه به آستانه
            positive_changes = sum(1 for change in changes if change > threshold)
            negative_changes = sum(1 for change in changes if change < -threshold)

            changesCount = positive_changes + negative_changes
            # تعیین نسبت با شرط صورت کسر
            if changesCount >= 2:  # اطمینان از اینکه صورت کسر کمتر از 2 نشود
                time_signature = f"{changesCount}/{denom}"

                if changesCount >= 2:  # فقط تایم سیگنیچرهایی با صورت کسر >= 2
                    if time_signature not in time_signatures:
                        time_signatures[time_signature] = 1
                    else:
                        time_signatures[time_signature] += 1

    # انتخاب پر تکرارترین تایم سیگنیچر
    if time_signatures:
        detected_signature = max(time_signatures, key=time_signatures.get)
        return f"Detected Time Signature: {detected_signature}, Average Distance to Quietest Bit: {average_distance}"
    
    return "Unknown"

def main(input_file):
    # Load JSON file
    music_data = load_json(input_file)

    main_dir = os.path.dirname(input_file)
    main_name = music_data['name']
    frame_rate = music_data['frame_rate']

    print(f"Main name from JSON: {main_name}")

    # Save BPM data to a new directory
    output_directory = Path(main_dir) / "BPM_Data"
    
    # نمایش پوشه‌های موجود در BPM_Data
    bpm_folders = list_bpm_folders(output_directory)
    print("\nAvailable BPM folders:")
    for folder in bpm_folders:
        print(folder.name)

    # انتخاب پوشه توسط کاربر
    selected_folder_name = input("Please enter BPM you want to load: ")
    selected_folder = output_directory / selected_folder_name

    if not selected_folder.is_dir():
        print("Selected folder does not exist.")
        exit()

    # بارگذاری فایل 001_godgiven-beat-frequencies.csv
    frequencies_file_path = selected_folder / f"{main_name}-beat-frequencies.csv"
    if not frequencies_file_path.is_file():
        print(f"File {frequencies_file_path} does not exist.")
        exit()

    frequencies_data = pd.read_csv(frequencies_file_path)

    # تشخیص تایم سیگنیچر
    time_signature = detect_time_signature(frequencies_data)
    print(f"Detected Time Signature: {time_signature}")

if __name__ == "__main__":
    input_file = get_input_file_path()
    main(input_file)
