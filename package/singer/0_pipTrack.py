import pandas as pd 
import librosa
# import os
import shutil
from pathlib import Path
mainPath = Path().absolute()
# import numpy as np
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
pitches, magnitudes = librosa.piptrack(y=y, sr=sr)




# Save the data frame pitches as a csv file ###########
#######################################################
DPitches = pd.DataFrame(pitches) 
csvFilePath = mainDir / str(mainName+"-pitches.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DPitches.to_csv(csvFilePath, mode='x')

# Save the data frame magnitudes as a csv file ###########
##########################################################
DMagnitudes = pd.DataFrame(magnitudes) 
csvFilePath = mainDir / str(mainName+"-magnitudes.csv")
if csvFilePath.is_file():
    csvFilePath.unlink()
DMagnitudes.to_csv(csvFilePath, mode='x')