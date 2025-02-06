import pandas as pd
import json
import os
from pathlib import Path
import numpy as np
import sys
from warnings import simplefilter

simplefilter(action="ignore", category=pd.errors.PerformanceWarning)

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

def load_csv(file_path):
    try:
        return pd.read_csv(file_path)
    except FileNotFoundError:
        print('CSV file does not exist.')
        exit()

def preprocess_data(data, df):
    # مرحله 1: محاسبه تعداد تکرارها
    df.columns = ["data", "note", "note-data", 'count']
    # data.columns = ["note", "note-data", "count"]
    
    # مرحله 2: جایگزینی مقادیر
    # ایجاد یک کپی از DataFrame برای جایگزینی
    # df_copy = data.copy()

    # پیدا کردن ایندکس اولین و آخرین صفر
    # first_not_zero_index = data[data["note-data"] != 0].index.min()
    # last_not_zero_index = data[data["note-data"] != 0].index.max() + 1
    
    # محاسبه تغییرات فرکانس
    frequency_changes = []
    threshold = 1  # آستانه تغییر فرکانس

    for i in range(1, len(df)):
        change = abs(df.loc[i, 'note-data'] - df.loc[i - 1, 'note-data'])  # تغییر فرکانس
        if change > threshold:
            frequency_changes.append(i)  # زمان نقاط شکست
    
    # نمایش نقاط شکست
    print("Breakpoints based on frequency changes:", frequency_changes)

    # محاسبه BPM برای نقاط شکست
    bpm_values = range(60, 200)
    matching_bpm = {}
    listMatchingPoint = {}
    for bpm in bpm_values:
        # listMatchingPoint[bpm] = []
        interval = 60 / bpm  # زمان بین هر ضربه در ثانیه
        for breakpoint in frequency_changes:
            # پیدا کردن نزدیک‌ترین BPM
            if abs((breakpoint * data['frame_rate']) % interval) < data['frame_rate'] / 2:
                if bpm in matching_bpm:
                    matching_bpm[bpm] += 1
                    listMatchingPoint[bpm].append(breakpoint)
                else:
                    matching_bpm[bpm] = 1
                    listMatchingPoint[bpm] = [breakpoint]
                    # listMatchingPoint[bpm].append(breakpoint)
    # پیدا کردن BPM با بیشترین تطابق
    if matching_bpm:
        npMatchingBpm = pd.DataFrame(matching_bpm.items())
        npMatchingList = pd.DataFrame(listMatchingPoint.items()) 
        npMatchingBpm["2"] = npMatchingList[1].to_numpy()
        sortDF = npMatchingBpm.sort_values(by=[1], ascending=False)
        # the best of bpm 64, 75, 80, 96, 100, 120, 125, 128, 150, 160, 192, 200
        print(sortDF.head(10))
        best_bpm = max(matching_bpm, key=matching_bpm.get)
        print(f"Best matching BPM: {best_bpm} with {matching_bpm[best_bpm]} matches")
    else:
        print("No matching BPM found.")
    # return df_copy

def main(input_file):
    # Load JSON file
    music_data = load_json(input_file)
    
    main_dir = os.path.dirname(input_file)
    main_name = music_data['name']

    # Load CSV file
    data_path = os.path.join(main_dir, f"{main_name}-grouping-frequency.csv")
    data = load_csv(data_path)

    # Preprocess data
    processed_data = preprocess_data(music_data, data)

    # Save output
    # output_path = Path(os.path.join(main_dir, f"{main_name}-last-analyze.csv"))
    # processed_data.to_csv(output_path, index=False)

if __name__ == "__main__":
    input_file_path = get_input_file_path()
    main(input_file_path)
