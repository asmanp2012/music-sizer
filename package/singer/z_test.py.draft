import pandas as pd 
import wave
import numpy as np
import os
import sys
#############################################
# np.set_printoptions(threshold=sys.maxsize)
#############################################
path = os.getcwd()
file_name = path + "\wav files\d2.wav"
wav_obj = wave.open(file_name, 'rb')
#############################################
sample_freq = wav_obj.getframerate() # تعداد نمونه هایی از صدا را در هر ثانیه
n_samples = wav_obj.getnframes() # تعداد فریم‌ها یا نمونه‌ها
#############################################
t_audio = n_samples/sample_freq # زمان فایل صوتی
n_channels = wav_obj.getnchannels() # تعداد کانال ها
signal_wave = wav_obj.readframes(n_samples) # گرفتن همه نمونه ها
#############################################
signal_array = np.frombuffer(signal_wave, dtype=np.int16) # انتقال همه نمونه ها به numpy
# da_fft = np.fft.rfft(signal_array) # تبدیل سیگنال به فرکانس
# print(n_channels)
DF = pd.DataFrame(signal_array) 
  
# save the dataframe as a csv file 
DF.to_csv("test.csv", mode='x')