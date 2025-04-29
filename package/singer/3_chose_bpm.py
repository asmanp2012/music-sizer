import pandas as pd
import json
import os
from pathlib import Path
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

def load_csv(file_path):
    try:
        return pd.read_csv(file_path)
    except FileNotFoundError:
        print('CSV file does not exist.')
        exit()

def select_row_by_bpm(df):
    print("Available BPMs:")
    unique_bpms = df.iloc[:, 0].unique()
    for bpm in unique_bpms:
        print(f"BPM: {bpm}")
    
    selected_bpm = int(input("Please enter the BPM: "))
    selected_rows = df[df.iloc[:, 0] == selected_bpm]
    
    if not selected_rows.empty:
        return selected_rows, selected_bpm
    else:
        print("No row found for the given BPM.")
        exit()

def calculate_frames_per_beat(bpm, frame_rate):
    interval = bpm / 60
    frames_per_beat = round(interval / frame_rate)
    return frames_per_beat

def save_bpm_data(bpm, frame_rate, frames_per_beat, output_directory):
    bpm_data = {
        "BPM": bpm,
        "Frame Rate": frame_rate,
        "Frames per Beat": frames_per_beat
    }
    
    bpm_folder = Path(output_directory) / str(bpm)
    bpm_folder.mkdir(parents=True, exist_ok=True)
    
    bpm_file_path = bpm_folder / "bpm_data.json"
    with open(bpm_file_path, 'w') as json_file:
        json.dump(bpm_data, json_file, indent=4)
    
    print(f"BPM data saved in {bpm_file_path}")

def main(input_file):
    # Load JSON file
    music_data = load_json(input_file)
    
    # Load CSV file
    csv_file_path = Path(os.path.dirname(input_file)) / "001_godgiven-002-bpm-list.csv"
    bpm_data = load_csv(csv_file_path)

    main_name = music_data['name']
    frame_rate = music_data['frame_rate']
    
    print(f"Main name from JSON: {main_name}")
    print(f"Frame rate (length of each frame in seconds): {frame_rate}")

    selected_rows, selected_bpm = select_row_by_bpm(bpm_data)
    print("You selected the following rows:")
    print(selected_rows)

    frames_per_beat = calculate_frames_per_beat(selected_bpm, frame_rate)
    print(f"Number of frames per beat for BPM {selected_bpm}: {frames_per_beat}")

    # Save BPM data to a new directory
    output_directory = Path(os.path.dirname(input_file)) / "BPM_Data"
    save_bpm_data(selected_bpm, frame_rate, frames_per_beat, output_directory)

if __name__ == "__main__":
    input_file = get_input_file_path()
    main(input_file)
