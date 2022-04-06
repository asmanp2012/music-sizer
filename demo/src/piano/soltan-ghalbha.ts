import { Music } from '@music-sizer/main';

const instrument = 'piano';
const myMusic = new Music();

myMusic.tempo = 140;

myMusic.addInstrument(instrument);
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
};

/* ********* Start Bar ************ */
/* ********** End Bar ************ */
/* ********* Start Bar ************ */
/* ********** End Bar ************ */
myMusic.next(instrument, 6);

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 4, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 4, length: 1 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 4, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 4, length: 1 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 4, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 4, length: 1 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['C5', 'D5', 'C5', 'B4', 'D5', 'B4', 'A4', 'B4', 'A4'],
  inputDuration: { type: 3, length: 3 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['B4', 'C5', 'B4', 'A4', 'B4', 'A4', 'G4', 'A4', 'G4'],
  inputDuration: { type: 3, length: 3 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 1 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 6, length: 4 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 5 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['Ab4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['Ab3'], inputDuration: { type: 6, length: 2 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['Ab3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.playSuccessive({
  instrument,
  noteList: [null, null, 'C5', 'B4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.playSuccessive({
  instrument,
  noteList: [null, null, 'G5', 'F#5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.playSuccessive({
  instrument,
  noteList: ['F#5', 'G5', 'F#5', 'G5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['C5', 'D5', 'C5', 'B4', 'C5', 'B4', 'A4', 'B4', 'A4'],
  inputDuration: { type: 3, length: 3 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.playSuccessive({
  instrument,
  noteList: [null, null, 'G5', 'F#5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.playSuccessive({
  instrument,
  noteList: ['F#5', 'G5', 'F#5', 'G5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['B4', 'C5', 'B4', 'A4', 'B4', 'A4', 'G4', 'A4', 'G4'],
  inputDuration: { type: 3, length: 3 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 6, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 6, length: 1 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 }, velocity: 50 });
myMusic.playSuccessive({ instrument, noteList: [null, null, 'A4', null], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: [null, null, null, null, null, 'Bb4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 }, velocity: 50 });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'G3', 'B3', 'E4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument, 3);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2', 'B3', 'B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Db3'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['Db4'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['G5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3', 'Eb4', 'F#5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument, 3);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 6, length: 2 } });
myMusic.delay(instrument, { type: 6, length: 2 });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 6, length: 1 } });
myMusic.delay(instrument, { type: 6, length: 3 });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3', 'C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['Eb3', 'B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3', 'C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'Ab3', 'B3', 'D4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['D5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.playSuccessive({
  instrument,
  noteList: ['B4', 'C5', 'B4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 6, length: 3 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3', 'B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4', 'B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 } });
myMusic.play({ instrument, noteList: ['Eb3', 'F#3'], inputDuration: { type: 6, length: 1 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 5 } });
myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A4', 'B4', 'A4', 'B4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'G4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C3', 'G4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['Db3', 'G4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 6, length: 1 } });
myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['Eb4', 'E4'],
  inputDuration: { type: 3, length: 1 },
  velocity: 50
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 3 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['F#4', 'G4'],
  inputDuration: { type: 3, length: 1 },
  velocity: 50
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'G3', 'B3', 'B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument, 2);

myMusic.playSuccessive({
  instrument,
  noteList: [null, 'G4', 'F#4'],
  inputDuration: { type: 3, length: 1 },
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 6, length: 3 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3', 'C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['Eb3', 'B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3', 'C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 3 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'Ab3', 'B3', 'D4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.playSuccessive({
  instrument,
  noteList: ['B4', 'C5', 'B4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3', 'B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3', 'F#3', 'A3'], inputDuration: { type: 6, length: 3 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 1 } });
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 6, length: 3 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A4', 'B4', 'A4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'G4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3', 'A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C3', 'G4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3', 'A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['Db3', 'G4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3', 'F#4'], inputDuration: { type: 3, length: 1 } });
myMusic.delay(instrument, { type: 6, length: 6 });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2', 'E4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3', 'Eb4'], inputDuration: { type: 6, length: 4 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 } });
myMusic.delay(instrument, { type: 6, length: 6 });
myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['Eb4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#4'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'G3', 'B3', 'E4'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['D5'], inputDuration: { type: 6, length: 2 } });
myMusic.delay(instrument, { type: 6, length: 7 });
myMusic.play({ instrument, noteList: ['Eb5'], inputDuration: { type: 6, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'Ab3', 'B3', 'D4', 'D5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument, 2);

myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 6, length: 3 } });
myMusic.delay(instrument, { type: 6, length: 3 });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 6, length: 5 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['B4', 'A4', 'B4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['B4', 'C5', 'B4', 'C5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3', 'A4'], inputDuration: { type: 6, length: 4 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['D3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3', 'D4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A4', 'F#3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['D3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A4', 'G4', 'A4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['D4'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A4', 'B4', 'A4', 'B4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3', 'G4'], inputDuration: { type: 6, length: 4 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3', 'C5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3', 'A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3', 'G4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.playSuccessive({
  instrument,
  noteList: ['G4', 'F#4', 'G4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.delay(instrument, { type: 6, length: 2 });
myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 6 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['G4', 'A4', 'G4', 'A4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['F#4', 'G4'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['A4'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3', 'A4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3', 'D4'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 6, length: 2 } });
myMusic.play({ instrument, noteList: ['C5'], inputDuration: { type: 3, length: 1 } });
myMusic.delay(instrument, { type: 6, length: 5 });
myMusic.play({ instrument, noteList: ['D5'], inputDuration: { type: 6, length: 3 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 4 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3', 'F#3', 'A3'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['G5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb5'], inputDuration: { type: 6, length: 6 } });
myMusic.delay(instrument, { type: 6, length: 6 });
myMusic.play({ instrument, noteList: ['F#5'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'G3', 'B3'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['G5'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument);

myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['D6'], inputDuration: { type: 6, length: 3 } });
myMusic.delay(instrument, { type: 6, length: 7 });
myMusic.play({ instrument, noteList: ['Eb6'], inputDuration: { type: 6, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E6'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3', 'Ab3', 'B3', 'D4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['D6'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument, 2);

myMusic.playSuccessive({
  instrument,
  noteList: ['C6', 'B5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A2'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['C6'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.playSuccessive({
  instrument,
  noteList: ['B5', 'A5', 'B5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['C6'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['B5', 'C6', 'B5', 'C6'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['C3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A5', 'B5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['D3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['C6'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3', 'D6'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['C6'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A3', 'B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['A5'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['G2'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 3 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A5', 'G5', 'A5'],
  inputDuration: { type: 3, length: 2 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['D3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['D3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['A5', 'B5', 'A5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 6, length: 4 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['G5', 'A5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C3'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3', 'C6'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['C4'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['A5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E3', 'G5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 4 } });
myMusic.play({ instrument, noteList: ['A5'], inputDuration: { type: 6, length: 12 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 3 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.playSuccessive({
  instrument,
  noteList: ['G5', 'F#5', 'G5'],
  inputDuration: { type: 6, length: 12 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['A3'], inputDuration: { type: 3, length: 3 } });
myMusic.play({ instrument, noteList: ['A5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 2 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['G5', 'A5', 'G5', 'A5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['F#5', 'G5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2', 'A5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3', 'B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Db3'], inputDuration: { type: 3, length: 1 } });
myMusic.play({ instrument, noteList: ['G5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 1 } });
myMusic.playSuccessive({
  instrument,
  noteList: ['F#5', 'G5'],
  inputDuration: { type: 3, length: 1 }
});
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 2 } });
myMusic.play({ instrument, noteList: ['Bb5'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['Eb3'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['F#3'], inputDuration: { type: 3, length: 1 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/** *************************************** Fade out */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['E2'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G2'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['B2'], inputDuration: { type: 3, length: 1 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['E3'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['G3'], inputDuration: { type: 6, length: 4 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['B3'], inputDuration: { type: 6, length: 4 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E4'], inputDuration: { type: 3, length: 12 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G4'], inputDuration: { type: 3, length: 11 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B4'], inputDuration: { type: 3, length: 10 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 3 } });
myMusic.next(instrument);

myMusic.play({ instrument, noteList: ['G5'], inputDuration: { type: 3, length: 2 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 1 } });
myMusic.delay(instrument, { type: 6, length: 6 });
myMusic.play({ instrument, noteList: ['E6'], inputDuration: { type: 6, length: 2 } });
myMusic.next(instrument, 2);

myMusic.play({ instrument, noteList: ['E5'], inputDuration: { type: 3, length: 5 } });
myMusic.delay(instrument, { type: 6, length: 2 });
myMusic.play({ instrument, noteList: ['G5'], inputDuration: { type: 3, length: 5 } });
myMusic.delay(instrument, { type: 6, length: 4 });
myMusic.play({ instrument, noteList: ['B5'], inputDuration: { type: 3, length: 5 } });
myMusic.next(instrument);
/* ********** End Bar ************ */

myMusic.save('./demo/piano/soltan-ghalbha.mid');

export {};
