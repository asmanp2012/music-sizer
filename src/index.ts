import { Music } from './music';

const myMusic = new Music();

myMusic.tempo = 140;

myMusic.addInstrument('piano');
myMusic.timeSignature = {
    numerator: 3,
    denominator: 4
}
/* ********* Start Bar ************ */
/* ********** End Bar ************ */
/* ********* Start Bar ************ */
/* ********** End Bar ************ */
myMusic.next('piano', 6);

/* ********* Start Bar ************ */
myMusic.play('piano', ['A4'], { type:3, length:3 });
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:4, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:4, length:1 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['C5'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:4, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:4, length:1 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['E5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:4, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:4, length:1 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'C5', 'D5', 'C5', 'B4', 'D5', 'B4', 'A4', 'B4', 'A4' ]
  , { type:3, length: 3 }
);
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['G4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['G3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['G3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['E5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['G3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'B4', 'C5', 'B4', 'A4', 'B4', 'A4', 'G4', 'A4', 'G4' ]
  , { type:3, length: 3 }
);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['F#4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['F#3'], { type:6, length:1 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['F#3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['A4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['Eb3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['Eb3'], { type:6, length:4 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E2'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['A4'], { type:3, length:1 });
myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C3'], { type:3, length:2 });
myMusic.play('piano', ['G4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['F#4'], { type:3, length:1 }, 50);
myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['G4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:5 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['Ab4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['Ab3'], { type:6, length:2 }, 50);
myMusic.next('piano');


myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['Ab3'], { type:6, length:3 }, 50);
myMusic.playSuccessive( 
  'piano', [ null , null, 'C5', 'B4' ]
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2'], { type:3, length:2 });
myMusic.play('piano', ['A4'], { type:3, length:3 });
myMusic.next('piano');


myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2'], { type:3, length:2 });
myMusic.play('piano', ['C5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.playSuccessive( 
  'piano', [ null , null, 'G5', 'F#5' ]
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2'], { type:3, length:2 });
myMusic.play('piano', ['E5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.playSuccessive( 
  'piano', [ 'F#5', 'G5', 'F#5', 'G5'  ]
  , { type:3, length: 1 }
);
myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['E5'], { type:3, length:1 });
myMusic.play('piano', ['E3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'C5', 'D5', 'C5', 'B4', 'C5', 'B4', 'A4', 'B4', 'A4' ]
  , { type:3, length: 3 }
);
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['G4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['E4'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['E4'], { type:6, length:3 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['E4'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['E4'], { type:3, length:1 }, 50);
myMusic.playSuccessive( 
  'piano', [ null , null, 'G5', 'F#5' ]
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['E5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['E4'], { type:6, length:3 }, 50);
myMusic.playSuccessive( 
  'piano', [ 'F#5', 'G5', 'F#5', 'G5'  ]
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['E4'], { type:3, length:1 }, 50);
myMusic.play('piano', ['E5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'B4', 'C5', 'B4', 'A4', 'B4', 'A4', 'G4', 'A4', 'G4' ]
  , { type:3, length: 3 }
);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['E4'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['E4'], { type:6, length:3 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['F#4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:6, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:6, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:6, length:1 }, 50);
myMusic.play('piano', ['A3'], { type:3, length:1 }, 50);
myMusic.playSuccessive( 'piano', [ null, null, 'A4', null ] , { type:3, length: 1 });
myMusic.playSuccessive( 
  'piano', 
  [ null, null, null, null, null, 'Bb4' ], 
  { type:3, length: 1 }
);
  myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['B3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['A4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C3'], { type:3, length:2 });
myMusic.play('piano', ['G4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['G3'], { type:6, length:3 }, 50);
myMusic.play('piano', ['F#4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:3 });
myMusic.play('piano', ['G3'], { type:3, length:3 });
myMusic.play('piano', ['B3'], { type:3, length:3 });
myMusic.play('piano', ['E4'], { type:3, length:3 });
myMusic.next('piano');
/* ********** End Bar ************ */

myMusic.save('Music.mid');
