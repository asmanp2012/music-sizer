import pandas as pd 
import librosa
import json
import shutil
from pathlib import Path
import numpy as np
import math
import sys
import time
import os
from collections import Counter

mainPath = Path().absolute()

def get_input_file_path():
    if len(sys.argv) > 1:
        return sys.argv[1]
    return input('Please input your audio file name: ')

def get_time_shape():
    if len(sys.argv) > 2:
        return sys.argv[2]
    return input('Please input your output time shape (x or y): ')

def copy_input_file(input_file, main_dir):
    main_file = main_dir / input_file.name
    print(f"Copying {input_file} to {main_file}")
    if not main_file.is_file():
        shutil.copy(str(input_file), str(main_file))
    return main_file

def load_audio_file(inputFile):
    try:
        y, sr = librosa.load(str(inputFile))
        tempo, _ = librosa.beat.beat_track(y=y, sr=sr)
        tempo = round(tempo)
        print(f'Estimated BPM: {tempo}')
        print('Your file Sampling rate is ', sr)
        return y, sr, tempo
    except Exception as e:
        print(f"Error loading audio file: {e}")
        exit()

def save_dataframe_to_csv(df, file_path, transpose=False):
    if transpose:
        df = df.transpose()
    if file_path.is_file():
        file_path.unlink()
    df.to_csv(file_path, mode='x', index=False)

def calculate_frames_per_beat(bpm, frame_rate):
    interval = bpm / 60
    frames_per_beat = round(interval / frame_rate)
    return frames_per_beat

# Function to process pitches and magnitudes
def process_pitches_and_magnitudes(pitches, magnitudes):
    notsList = np.empty(magnitudes.shape, dtype=str)
    frequencyList = magnitudes.copy()

    for index, data in np.ndenumerate(pitches):
        if data > 0:    
            notsList[index[0]][index[1]] = librosa.hz_to_note(math.floor(data))
            frequencyList[index[0]][index[1]] = librosa.note_to_hz(notsList[index[0]][index[1]])
        else:
            notsList[index[0]][index[1]] = "0"
            frequencyList[index[0]][index[1]] = 0
            
    return notsList, frequencyList

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

def analyze_frequencies(magnitudes, frequencies, frames_per_beat):

    results = []

    # پردازش هر بیت
    for start in range(0, magnitudes.shape[1], frames_per_beat):
        end = start + frames_per_beat
        if end > magnitudes.shape[0]:
            break
        
        # انتخاب فریم‌ها برای این بیت
        segment_magnitudes = (magnitudes.iloc[:,start:end]).to_numpy()
        segment_frequencies = (frequencies.iloc[:, start:end]).to_numpy()

        # محاسبه تعداد تکرار فرکانس‌ها
        freq_counter = Counter(segment_frequencies.flatten())
        
        # محاسبه میانگین magnitudes برای هر فرکانس
        avg_magnitudes = {}
        for freq in freq_counter.keys():
            indices = np.where(segment_frequencies == freq)
            avg_magnitude = np.mean(segment_magnitudes[indices])
            avg_magnitudes[freq] = avg_magnitude

        # محاسبه نمره نهایی
        for freq, count in freq_counter.items():
            score = count * avg_magnitudes[freq]  # نمره نهایی
            results.append((freq, count, avg_magnitudes[freq], score))

    return results

current_time = time.ctime()
# Load file #################################
print("****************************************************************")
print(f"Start At{current_time}")
print("****************************************************************")


inputFilePath = get_input_file_path()
timeShape = "x" # get_time_shape()

inputFile = Path(inputFilePath)
if not inputFile.is_file():
    print('Your file does not exist :(')
    exit()

inputFilename = inputFile.name
mainName = inputFilename.split('.')[-2]
mainDir = mainPath / 'demo' / '0_singer' / mainName

if not mainDir.is_dir():
    mainDir.mkdir(parents=True, exist_ok=True)

mainFile = copy_input_file(inputFile, mainDir)

print("****************************************************************")
print('Importing ', inputFilename, ' for analysis')
print("****************************************************************")

# Load audio file
y, sr, tempo= load_audio_file(mainFile)

# Detect Frequency ##########################
n_fftValue = 2048
pitches, magnitudes = librosa.piptrack(y=y, sr=sr, n_fft=n_fftValue)

# Save pitches and magnitudes to CSV
DPitches = pd.DataFrame(pitches)
save_dataframe_to_csv(DPitches, mainDir / f"{mainName}-pitches.csv", transpose=(timeShape == 'y'))

DMagnitudes = pd.DataFrame(magnitudes)
save_dataframe_to_csv(DMagnitudes, mainDir / f"{mainName}-magnitudes.csv", transpose=(timeShape == 'y'))

# Process pitches and magnitudes
notsList, frequencyList = process_pitches_and_magnitudes(DPitches.to_numpy(), DMagnitudes.to_numpy())

# Save frequency and notes lists to CSV
DataFrequencyList = pd.DataFrame(frequencyList)
save_dataframe_to_csv(DataFrequencyList, mainDir / f"{mainName}-frequency.csv", transpose=(timeShape == 'y'))

DataNotsList = pd.DataFrame(notsList)
save_dataframe_to_csv(DataNotsList, mainDir / f"{mainName}-nots.csv", transpose=(timeShape == 'y'))

# Save metadata to JSON
jsonFilePath = mainDir / f"{mainName}-data.json"
if jsonFilePath.is_file():
    jsonFilePath.unlink()

mainSr = sr
mainLength = len(y)
mainDuration = mainLength / mainSr
hopeLength = n_fftValue / 4
frameLengthFloat = mainLength / hopeLength
frameLength = int(frameLengthFloat)
frameRate = mainDuration / frameLength


frames_per_beat = calculate_frames_per_beat(tempo, frameRate)
print(f"Number of frames per beat for BPM {tempo}: {frames_per_beat}")

# Save BPM data to a new directory
output_directory = mainDir / "BPM_Data"
save_bpm_data(tempo, frameRate, frames_per_beat, output_directory)

result = pd.DataFrame(analyze_frequencies(DMagnitudes, DataFrequencyList, frames_per_beat))
save_dataframe_to_csv(result, output_directory / f"{tempo}" / f"{mainName}-beat-frequencies.csv")


main_data = {
    "name": mainName,
    "sampling_rate": mainSr,
    "length": mainLength,
    "n_fft": n_fftValue,
    "duration": mainDuration,
    "hope_length": hopeLength,
    "frame_length": frameLength,
    "frame_rate": frameRate,
    "tempo": tempo
}

with open(jsonFilePath, "w") as outfile:
    json.dump(main_data, outfile, indent=4)

end_time = time.ctime()
print("****************************************************************")
print(f"End At{end_time}")
print("****************************************************************")