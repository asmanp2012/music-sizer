import pandas as pd
import json
import os
from pathlib import Path
import sys
import math
from warnings import simplefilter
simplefilter(action="ignore", category=pd.errors.PerformanceWarning)
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
data.reset_index(drop=True, inplace=True)

# Remove trailing zeros =======================================================================
last_zero_index = data[data["data"] == 0].index.max()
last_not_zero_index = data[data["data"] != 0].index.max() + 1
if last_not_zero_index is not None:
  # حذف ردیف‌ها از آخرین ردیف با مقدار صفر تا انتهای داده‌ها
  data = data.iloc[0:last_not_zero_index]

last_value = -1
countAll = data.shape[0]
for index in range(countAll):
  nextIndex = index + 1
  if(
    nextIndex < countAll and
    last_value == data["note-data"][nextIndex]
  ):
    data.at[index, "note"] = data["note"][nextIndex]
    data.at[index, "note-data"] = data["note-data"][nextIndex]
  if(
    nextIndex + 1 < countAll and
    data["count"][index] == 1 and
    last_value == data["note-data"][nextIndex + 1]
  ):
    data.at[index, "note"] = data["note"][nextIndex + 1]
    data.at[index, "note-data"] = data["note-data"][nextIndex + 1]
  last_value = data["note-data"][index]

last_value = 0
same_value = 0
last_same_value = 0
for index in range(data.shape[0]):
  if(last_value ==  data['note-data'][index]):
    same_value += 1
    data.at[index, "count"] = same_value
  else:
    same_value = 1
    data.at[index, "count"] = same_value
  # lastIndex = index
# ***************************************************************
  for index2 in range(index, index - same_value, -1):
    data.at[index2, "count"] = same_value
  last_value = data['note-data'][index]


bpmTimeFile = open('./package/singer/datasets/beat-time.json')
bpmTime = json.load(bpmTimeFile)


frame_rate = musicData['frame_rate']
indexList = data.index.values.tolist()
attr = '200'
value = bpmTime.get(attr)
# for attr, value in bpmTime.items():
window_frame = math.ceil(value / frame_rate)
# data[attr] = data['note-data'].rolling(window=window_frame)
data[attr] = [math.floor(index / window_frame) for index in indexList]
# print(attr, value, frame_rate, math.ceil(value / frame_rate))
print(attr, math.ceil(value / frame_rate))


# Continue with further processing...

DHfrequence = pd.DataFrame(data) 
DHfrequenceOutPut = data
# if(timeShape == 'y'):
#     DHfrequenceOutPut = DHfrequenceOutPut.transpose()
csvFilePath = Path(os.path.join(mainDir, str(mainName+"-last-analyze.csv")))
if csvFilePath.is_file():
    csvFilePath.unlink()
DHfrequenceOutPut.to_csv(csvFilePath, mode='x', index=False)


