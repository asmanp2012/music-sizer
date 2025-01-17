import pandas as pd
import json
import os
from pathlib import Path
import sys

# Load file #################################
#############################################
print("****************************************************************")
print("****************************************************************")

# Initialize input variables
inputFilePath = ''
timeShape = ''

# Get command line arguments
if len(sys.argv) > 2:
  timeShape = sys.argv[2]
if len(sys.argv) > 1:
  inputFilePath = sys.argv[1]

# Prompt for input if not provided
if inputFilePath == '':
  inputFilePath = input('Please input your audio file name: ')
if timeShape == '':
  timeShape = input('Please input your output time shape (x or y): ')

# Validate input file path
inputFile = Path(inputFilePath)
if not inputFile.is_file():
  print('Your file does not exist :(')
  exit()

# Load JSON file =============================================================================
try:
  with open(inputFile) as musicFileData:
    musicData = json.load(musicFileData)
except (FileNotFoundError, json.JSONDecodeError) as e:
  print(f'Error loading JSON file: {e}')
  exit()

mainDir = os.path.dirname(inputFile)
mainName = musicData['name']

# Load CSV file ===============================================================================
dataPath = os.path.join(mainDir, f"{mainName}-high-frequence.csv")
try:
  data = pd.read_csv(dataPath)
except FileNotFoundError:
  print('CSV file does not exist.')
  exit()

data.columns = ["data", "note", "note-data", 'count']

# Remove leading zeros ========================================================================
first_valid_index = data['data'].ne(0).idxmax()  # Find the first non-zero value index
data = data.iloc[first_valid_index:]  # Slice from that index onward

# Remove trailing zeros =======================================================================
last_valid_index = data['data'].ne(0).iloc[::-1].idxmax()  # Find the last non-zero value index
data = data.iloc[:last_valid_index + 1]  # Slice up to that index

# Continue with further processing...
data['ma'] = data['count'].rolling(window=5).mean()
DHfrequence = pd.DataFrame(data) 
DHfrequenceOutPut = data
# if(timeShape == 'y'):
#     DHfrequenceOutPut = DHfrequenceOutPut.transpose()
csvFilePath = Path(os.path.join(mainDir, str(mainName+"-last-analyze.csv")))
if csvFilePath.is_file():
    csvFilePath.unlink()
DHfrequenceOutPut.to_csv(csvFilePath, mode='x', index=False)


# dataFile = open(dataPath)
# data = json.load(dataFile)

# bpmTimeFile = open('./datasets/beat-time.json')
# bpmTime = json.load(bpmTimeFile)

# for attr, value in bpmTime.items():
#   print(attr, value)
