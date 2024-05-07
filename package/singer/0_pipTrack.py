import pandas as pd 
import librosa
import os
# import numpy as np
# import sys
# import wave
#############################################
# np.set_printoptions(threshold=sys.maxsize)
#############################################

# Load file #################################
#############################################
path = os.getcwd()
file_name = path + "\wav files\/417_l.wav"
y, sr = librosa.load(file_name)

# Detect Frequency ##########################
#############################################
pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
# pitches = librosa.cqt_frequencies(200, fmin=librosa.note_to_hz('C1'))
DF = pd.DataFrame(pitches) 


# for i, row in df.iterrows():
# Calc 



# Save the dataframe as a csv file ##########
#############################################
filename="417.csv"
if os.path.exists(filename):
    os.remove(filename)
DF.to_csv(filename, mode='x')
