import { Music, } from '../../index.js';

const myMusic = new Music();

myMusic.tempo = 140;

myMusic.addInstrument('guitar');
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
}


const guitar = {
  stop: 'C#6',
  stop2: 'D#6',
  1: {
    0: 'E4', 
    1: 'F4', 2: 'F#4',
    3: 'G4', 4: 'G#4',
    5: 'A4', 6: 'A#4',
    7: 'B4', 
    8: 'C5', 9: 'C#5',
    10: 'D5', 11: 'D#5',
    12: 'E5',
    13: 'F5', 14: 'F#5',
    15: 'G5', 16: 'G#5',
    17: 'A5', 18: 'A#5',
    19: 'B5', 20: 'B#5',
    21: 'C6',
  },
  2: {
    0: 'B3',
    1: 'C4', 2: 'C#4',
    3: 'D4', 4: 'D#4',
    5: 'E4',
    6: 'F4', 7: 'F#4',
    8: 'G4', 9: 'G#4',
    10: 'A4', 11: 'A#4',
    12: 'B4',
    13: 'C5', 14: 'C#5',
    15: 'D5', 16: 'D#5'
  },
  6: {
    0: 'E2', 
    1: 'F2', 2: 'F#2',
    3: 'G2', 4: 'G#2',
    5: 'A2', 6: 'A#2',
    7: 'B2', 
    8: 'C3', 9: 'C#3',
    10: 'D3', 11: 'D#3',
    12: 'E3',
    13: 'F3', 14: 'F#3',
    15: 'G3', 16: 'G#3',
  },
}




export {};