import pandas as pd 
import librosa
import json
import shutil
from pathlib import Path
import numpy
import math
import sys
import time

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

# Function to process pitches and magnitudes
def process_pitches_and_magnitudes(pitches, magnitudes):
    notsList = numpy.empty(magnitudes.shape, dtype=str)
    frequencyList = magnitudes.copy()

    for index, data in numpy.ndenumerate(pitches):
        if data > 0:    
            notsList[index[0]][index[1]] = librosa.hz_to_note(math.floor(data))
            frequencyList[index[0]][index[1]] = librosa.note_to_hz(notsList[index[0]][index[1]])
        else:
            notsList[index[0]][index[1]] = "0"
            frequencyList[index[0]][index[1]] = 0
            
    return notsList, frequencyList

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

# High frequency processing
HFrequency = [list(range(DMagnitudes.shape[1])) for _ in range(4)]

countRow = DMagnitudes.shape[0]
last_value = 0
same_value = 0

for index in range(DMagnitudes.shape[1]):
    columnData = magnitudes[0:countRow, index]
    HIndex = numpy.argmax(columnData)
    HFrequency[0][index] = DPitches[index][HIndex]
    
    if DPitches[index][HIndex] > 0:        
        HFrequency[1][index] = librosa.hz_to_note(math.floor(DPitches[index][HIndex]))
        HFrequency[2][index] = librosa.note_to_hz(HFrequency[1][index])
    else:
        HFrequency[1][index] = 0
        HFrequency[2][index] = 0

    if last_value == HFrequency[2][index]:
        same_value += 1
        HFrequency[3][index] = same_value
    else:
        same_value = 1
        HFrequency[3][index] = same_value

    for index2 in range(index, index - same_value, -1):
        HFrequency[3][index2] = same_value
    last_value = HFrequency[2][index]

# Save high frequency data to CSV
DHFrequency = pd.DataFrame(HFrequency)
save_dataframe_to_csv(DHFrequency, mainDir / f"{mainName}-high-frequency.csv", transpose=(True))

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