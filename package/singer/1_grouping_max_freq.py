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

def preprocess_data(data, frameRate):
    bpm40ps = 60 / 200
    mWinDet = int(bpm40ps // frameRate)
    middleWin = int((1 + mWinDet) // 2)

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
    overIndex  = mWinDet - (last_not_zero_index % mWinDet) 
    # جایگزینی مقادیر با تعداد تکرار کمتر فقط در محدوده غیرصفر
    for i in range(first_not_zero_index + 1, last_not_zero_index + overIndex, mWinDet):
        # محاسبه start_index و end_index با توجه به mWinDet
        start_index = max(first_not_zero_index, i - mWinDet)  # شروع پنجره
        end_index = min(last_not_zero_index - 1, i + mWinDet)  # پایان پنجره

        if (i - middleWin) < first_not_zero_index:
            start_index = first_not_zero_index
        else:
            start_index = i - middleWin
        
        end_index = start_index + mWinDet

        if end_index > last_not_zero_index:
            start_index = last_not_zero_index - mWinDet
            end_index = last_not_zero_index
            
        
        # پیدا کردن ایندکس‌های شروع و پایان گروه
        group_start_index = df_copy['count'].iloc[start_index:end_index].idxmax()
        group_end_index = group_start_index + df_copy['count'].iloc[group_start_index] - 1  # آخرین ایندکس پنجره


        # پیدا کردن بزرگترین مقدار count در پنجره
        max_count_in_window = df_copy['count'][group_start_index]
        previous_group_count = -1
        next_group_count = -1

        if group_start_index-1 > first_not_zero_index:
            previous_group_count = df_copy['count'][group_start_index-1]
        if group_end_index + 1 < last_not_zero_index:
            next_group_count = df_copy['count'][group_end_index + 1]

        if max_count_in_window >= max_group_size:
            continue  # نادیده گرفتن این مقدار

        if previous_group_count <= max_count_in_window // 2:
            # print(i, 'p index')
            new_count = max_count_in_window + previous_group_count
            start_previous_group = group_start_index - previous_group_count
            for j in range(start_previous_group, group_end_index, 1):
                df_copy.loc[j, 'note'] = df_copy.loc[group_start_index, 'note']
                df_copy.loc[j, 'note-data'] = df_copy.loc[group_start_index, 'note-data']
                df_copy.loc[j, 'count'] = new_count  # به روزرسانی تعداد تکرار
                # print(df_copy.loc[j])
        
        if next_group_count <= max_count_in_window // 2:
            # print(i, 'n index')
            new_count = max_count_in_window + next_group_count
            end_next_group = group_end_index + next_group_count
            for j in range(group_start_index, end_next_group, 1):
                df_copy.loc[j, 'note'] = df_copy.loc[group_start_index, 'note']
                df_copy.loc[j, 'note-data'] = df_copy.loc[group_start_index, 'note-data']
                df_copy.loc[j, 'count'] = new_count  # به روزرسانی تعداد تکرار
                # print(df_copy.loc[j])

        
        # print(f"Window ({start_index}, {end_index}): Max Count = {max_count_in_window}", group_start_index, group_end_index)
        # print(f"Previous Group: Start Index = {group_start_index - previous_group_count}, Count = {previous_group_count}")
        # print(f"Next Group: End Index = {group_end_index + next_group_count}, Count = {next_group_count}")
        
        # if df_copy.loc[i - 1, 'count'] >= max_group_size:
        #     continue  # نادیده گرفتن این مقدار
        
        # if df_copy['count'].iloc[i] < df_copy['count'].iloc[i - 1]:
        #     df_copy.loc[i, 'note'] = df_copy.loc[i - 1, 'note']
        #     df_copy.loc[i, 'note-data'] = df_copy.loc[i - 1, 'note-data']
        #     df_copy.loc[i, 'count'] = df_copy.loc[i - 1, 'count'] + 1  # به روزرسانی تعداد تکرار
    return df_copy

def countingData(data):
    # مرحله 1: محاسبه تعداد تکرارها
    data.columns = ["data", "note", "note-data", 'count']
    # data.columns = ["note", "note-data", "count"]
    
    # مرحله 2: جایگزینی مقادیر
    # ایجاد یک کپی از DataFrame برای جایگزینی
    df_copy = data.copy()
    first_not_zero_index = data[data["note-data"] != 0].index.min()
    last_not_zero_index = data[data["note-data"] != 0].index.max() + 1
    last_value = 0
    same_value = 0
    for index in range(first_not_zero_index , last_not_zero_index):
        if last_value == df_copy.loc[index, 'note-data']:
            same_value += 1
        else:
            same_value = 1

        for index2 in range(index, index - same_value, -1):
            df_copy.loc[index2, 'count'] = same_value
        last_value = df_copy.loc[index, 'note-data']
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
    processed_data = preprocess_data(data, music_data['frame_rate'])
    processed_data = countingData(processed_data)
    # Save output
    output_path = Path(os.path.join(main_dir, f"{main_name}-grouping-frequency.csv"))
    processed_data.to_csv(output_path, index=False)

if __name__ == "__main__":
    input_file_path = get_input_file_path()
    main(input_file_path)
