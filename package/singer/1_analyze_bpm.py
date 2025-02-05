import pandas as pd
import json
import os
from pathlib import Path
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

def preprocess_data(data):
    # مرحله 1: محاسبه تعداد تکرارها
    data.columns = ["data", "note", "note-data", 'count']
    # data.columns = ["note", "note-data", "count"]
    
    # مرحله 2: جایگزینی مقادیر
    # ایجاد یک کپی از DataFrame برای جایگزینی
    df_copy = data.copy()

    # پیدا کردن ایندکس اولین و آخرین صفر
    first_not_zero_index = data[data["note-data"] != 0].index.min()
    last_not_zero_index = data[data["note-data"] != 0].index.max() + 1
    max_group_size = data[data['data'] != 0]['count'].max()
    print(max_group_size)
    
    # جایگزینی مقادیر با تعداد تکرار کمتر فقط در محدوده غیرصفر
    for i in range(first_not_zero_index + 1, last_not_zero_index):
        if df_copy.loc[i - 1, 'count'] >= max_group_size:
            continue  # نادیده گرفتن این مقدار
        
        if df_copy['count'].iloc[i] < df_copy['count'].iloc[i - 1]:
            df_copy.loc[i, 'note'] = df_copy.loc[i - 1, 'note']
            df_copy.loc[i, 'note-data'] = df_copy.loc[i - 1, 'note-data']
            df_copy.loc[i, 'count'] = df_copy.loc[i - 1, 'count'] + 1  # به روزرسانی تعداد تکرار

    return df_copy

def main(input_file):
    # Load JSON file
    music_data = load_json(input_file)
    
    main_dir = os.path.dirname(input_file)
    main_name = music_data['name']

    # Load CSV file
    data_path = os.path.join(main_dir, f"{main_name}-high-frequency.csv")
    data = load_csv(data_path)

    # Preprocess data
    processed_data = preprocess_data(data)

    # Save output
    output_path = Path(os.path.join(main_dir, f"{main_name}-last-analyze.csv"))
    processed_data.to_csv(output_path, index=False)

if __name__ == "__main__":
    input_file_path = get_input_file_path()
    main(input_file_path)
