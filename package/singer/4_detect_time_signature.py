import pandas as pd
import json
import os
from pathlib import Path
import numpy as np
from scipy.signal import find_peaks
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
    denominators = [16, 8, 4, 2]
    numerator = {
        16: [3],
        8: [3, 4, 5, 6, 7, 9, 12],
        4: [2, 3, 4, 5, 6],
        2: [2, 3]
    }
    time_signatures = {}

    loudness_segment = frequencies_data.iloc[:, 2].values
    peaks, _ = find_peaks(loudness_segment, height=0)
    intervals = np.diff(peaks)

    mean_interval = np.mean(intervals)
    std_interval = np.std(intervals)

    threshold = round(mean_interval + std_interval)
    denom = min(denominators, key=lambda x: abs(x - threshold))
    
    # تعیین نزدیک‌ترین numerator
    possible_numerators = numerator[denom]
    # closest_numerator = max(possible_numerators)  # یا هر منطق دیگری برای انتخاب
    closest_numerator = find_numerator_with_low_variance(intervals, possible_numerators)

    time_signature = f"{closest_numerator}/{denom}"
    print(f"Denom: {denom}, Time Signature: {time_signature}")
    
    return time_signature

def find_numerator_with_low_variance(intervals, possible_numerators):
    variances = {}
    
    for num in possible_numerators:
        adjusted_intervals = [interval for interval in intervals if interval % num == 0]
        if adjusted_intervals:  # اطمینان از اینکه لیست خالی نیست
            variances[num] = np.var(adjusted_intervals)
    
    closest_numerator = min(variances, key=variances.get)
    return closest_numerator

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
    print(f"{time_signature}")

if __name__ == "__main__":
    input_file = get_input_file_path()
    main(input_file)
