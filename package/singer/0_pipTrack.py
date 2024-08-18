import pandas as pd 
import librosa
import json
# import os
import shutil
from pathlib import Path
mainPath = Path().absolute()
import numpy
import math

# import sys
# import wave
#############################################
# np.set_printoptions(threshold=sys.maxsize)
#############################################

# Load file #################################
#############################################
print("****************************************************************")
print("****************************************************************")
inputFilePath = input('Please input your audio file name: ')
inputFile = Path(inputFilePath)
if(not inputFile.is_file()):
    print('Your file is not exist :(')
    exit()
# head, tail = os.path.split(file_name)
inputFilename = inputFile.name

mainName = inputFilename.split('.')[-2]
mainDir = mainPath / 'demo' / '0_singer' / mainName
mainFile = mainDir / inputFilename
if not mainDir.is_dir():
    mainDir.mkdir(parents=True, exist_ok=True)
# print('copy '+file_name+' '+mainDir+filename)
if(not inputFile.is_file()):
    shutil.copy(str(inputFile), str(mainFile))

print("****************************************************************")
print('import from ', mainFile, ' to analyze that')
print("****************************************************************")
# y is audio time series. Multi-channel is supported.
# sr is sampling rate of y
y, sr = librosa.load(str(mainFile))

print('Your file Sampling rate is ',sr)

# Detect Frequency ##########################
#############################################

# The magnitude tells you the strength of the frequency components relative to other components.
# The pitches is the perceptual correlate of fundamental frequency.

n_fftValue = 2048
pitches, magnitudes = librosa.piptrack(y=y, sr=sr, n_fft=n_fftValue)




# Save the data frame pitches as a csv file ###########
#######################################################
DPitches = pd.DataFrame(pitches) 
# NPitches = DPitches.to_numpy()
csvFilePath = mainDir / str(mainName+"-pitches.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DPitches.to_csv(csvFilePath, mode='x')

# Save the data frame magnitudes as a csv file ###########
##########################################################
DMagnitudes = pd.DataFrame(magnitudes) 
NMagnitudes = DMagnitudes.to_numpy()
csvFilePath = mainDir / str(mainName+"-magnitudes.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DMagnitudes.to_csv(csvFilePath, mode='x')
Hfrequence = [
    list(range(DMagnitudes.shape[1])),
    list(range(DMagnitudes.shape[1]))
]
countRow = DMagnitudes.shape[0]

for index in range(DMagnitudes.shape[1]):
    columnData = NMagnitudes[0:countRow, index]
    HIndex = numpy.argmax(columnData)
    Hfrequence[0][index] = DPitches[index][HIndex]
    if(DPitches[index][HIndex] > 0):        
        Hfrequence[1][index] = librosa.hz_to_note(math.floor(DPitches[index][HIndex]))

DHfrequence = pd.DataFrame(Hfrequence) 
csvFilePath = mainDir / str(mainName+"-high-frequence.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DHfrequence.to_csv(csvFilePath, mode='x')



jsonFilePath = mainDir / str(mainName+"-data.json")
if jsonFilePath.is_file():
    jsonFilePath.unlink()
main_data = {
    "name": mainName,
    "sampling_rate": sr,
    "length": len(y),
    "n_fft": n_fftValue,
    "hope_length": n_fftValue / 4,
    "length_frame": len(y) / (n_fftValue / 4),
    "duration": len(y) / sr
}
json_object = json.dumps(main_data, indent=4)
with open(jsonFilePath, "w") as outfile:
    outfile.write(json_object)
