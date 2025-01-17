import pandas as pd 
import librosa
import json
# import os
import shutil
from pathlib import Path
mainPath = Path().absolute()
import numpy
import math
import sys

# import wave
#############################################
# np.set_printoptions(threshold=sys.maxsize)
#############################################

# Load file #################################
#############################################
print("****************************************************************")
print("****************************************************************")

inputFilePath = ''
timeShape = ''
if(len(sys.argv) > 2):
    timeShape = sys.argv[2]
if(len(sys.argv) > 1):
    inputFilePath = sys.argv[1]
if(inputFilePath == ''):
    inputFilePath = input('Please input your audio file name: ')
if(timeShape == ''):
    timeShape = input('Please input your output time shape x or y: ')
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
print('copy '+inputFilename+' '+mainDir.__str__()+'\\'+inputFilename)
if(not mainFile.is_file()):
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
DPitchesOutPut = DPitches
if(timeShape == 'y'):
    DPitchesOutPut = DPitchesOutPut.transpose()
# NPitches = DPitches.to_numpy()
csvFilePath = mainDir / str(mainName+"-pitches.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DPitchesOutPut.to_csv(csvFilePath, mode='x', index=False)

# Save the data frame magnitudes as a csv file ###########
##########################################################
DMagnitudes = pd.DataFrame(magnitudes) 
DMagnitudesOutPut = DMagnitudes
NMagnitudes = DMagnitudes.to_numpy()
csvFilePath = mainDir / str(mainName+"-magnitudes.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
if(timeShape == 'y'):
    DMagnitudesOutPut = DMagnitudesOutPut.transpose()
DMagnitudesOutPut.to_csv(csvFilePath, mode='x',  index=False)

Hfrequence = [
    list(range(DMagnitudes.shape[1])),
    list(range(DMagnitudes.shape[1])),
    list(range(DMagnitudes.shape[1])),
    list(range(DMagnitudes.shape[1]))
    # list(range(DMagnitudes.shape[1]))
]
countRow = DMagnitudes.shape[0]
last_value = 0
same_value = 0
last_same_value = 0
for index in range(DMagnitudes.shape[1]):
    columnData = NMagnitudes[0:countRow, index]
    HIndex = numpy.argmax(columnData)
    Hfrequence[0][index] = DPitches[index][HIndex]
    if(DPitches[index][HIndex] > 0):        
        Hfrequence[1][index] = librosa.hz_to_note(math.floor(DPitches[index][HIndex]))
        Hfrequence[2][index] = librosa.note_to_hz(Hfrequence[1][index])
    else:
        Hfrequence[1][index] = 0
        Hfrequence[2][index] = 0
# ***************************************************************
    if(last_value == Hfrequence[2][index]):
        same_value += 1
        Hfrequence[3][index] = same_value
    else:
        same_value = 1
        Hfrequence[3][index] = same_value
    # lastIndex = index
# ***************************************************************
    for index2 in range(index, index - same_value, -1):
        Hfrequence[3][index2] = same_value
    last_value = Hfrequence[2][index]
# ***************************************************************
DHfrequence = pd.DataFrame(Hfrequence) 
DHfrequenceOutPut = DHfrequence
if(timeShape == 'y'):
    DHfrequenceOutPut = DHfrequenceOutPut.transpose()
csvFilePath = mainDir / str(mainName+"-high-frequence.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DHfrequenceOutPut.to_csv(csvFilePath, mode='x', index=False)


jsonFilePath = mainDir / str(mainName+"-data.json")
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
    "frame_rate": frameRate
}
json_object = json.dumps(main_data, indent=4)
with open(jsonFilePath, "w") as outfile:
    outfile.write(json_object)
