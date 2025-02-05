import pandas as pd
import json
import os
from pathlib import Path
import math
from warnings import simplefilter
import sys

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
    data.columns = ["data", "note", "note-data", 'count']
    
    # Group by note-data and count occurrences
    grouped = data.groupby(['note-data']).agg({
        'note': 'first',  # Get the first note for each group
        'count': 'count'  # Count occurrences
    }).reset_index()
    
    return grouped

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
