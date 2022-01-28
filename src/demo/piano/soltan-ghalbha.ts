import { Music } from '../../music.js';

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
myMusic.play('piano', ['E3', 'G3', 'B3', 'E4'], { type:3, length:3 });
myMusic.next('piano', 3);
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2', 'B3', 'B5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Db3'], { type:3, length:1 });
myMusic.play('piano', ['Db4'], { type:3, length:1 });
myMusic.play('piano', ['G5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3', 'Eb4', 'F#5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:3 });
myMusic.play('piano', ['E4'], { type:3, length:3 });
myMusic.play('piano', ['E5'], { type:3, length:3 });
myMusic.next('piano',3);
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['G4'], { type:6, length:2 });
myMusic.delay('piano', { type:6, length:2 });
myMusic.play('piano', ['F#4'], { type:6, length:1 });
myMusic.delay('piano', { type:6, length:3 });
myMusic.play('piano', ['E4'], { type:6, length:4 });
myMusic.next('piano');

myMusic.play('piano', ['F#4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3', 'C5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['Eb3', 'B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3', 'C5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 });
myMusic.play('piano', ['C5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'Ab3', 'B3', 'D4'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['D5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.playSuccessive( 
  'piano', [ 'B4', 'C5', 'B4' ]
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:6, length:3 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2', 'A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['A3', 'B4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['C4', 'B4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2', 'A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:6, length:3 });
myMusic.play('piano', ['Eb3', 'F#3'], { type:6, length:1 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:6, length:5 });
myMusic.play('piano', ['F#3'], { type:6, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'A4', 'B4', 'A4', 'B4' ]
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'G4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:6, length:3 });
myMusic.play('piano', ['A4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C3', 'G4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:6, length:3 });
myMusic.play('piano', ['A4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['Db3', 'G4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#4'], { type:6, length:1 });
myMusic.play('piano', ['B3'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'Eb4', 'E4' ], 
  { type:3, length: 1 }, 
  50
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['E4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:6, length:3 });
myMusic.playSuccessive( 
  'piano', [ 'F#4', 'G4' ], 
  { type:3, length: 1 }, 
  50
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:3 });
myMusic.play('piano', ['F#4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C4'], { type:3, length:2 });
myMusic.play('piano', ['C5'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:6, length:4 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'G3', 'B3', 'B4'], { type:3, length:2 });
myMusic.next('piano', 2);

myMusic.playSuccessive( 
  'piano', [ null, 'G4', 'F#4' ], 
  { type:3, length: 1 },
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G4'], { type:6, length:3 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'B4'], {type: 3, length: 2});
myMusic.next('piano');

myMusic.play('piano', ['G3'], {type: 3, length: 1});
myMusic.next('piano');

myMusic.play('piano', ['B3', 'C5'], {type: 3, length:1});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['Eb3', 'B4'], {type: 3, length: 2});
myMusic.next('piano');

myMusic.play('piano', ['G3'], {type: 3, length: 1});
myMusic.next('piano');

myMusic.play('piano', ['B3', 'C5'], {type: 3, length:1});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'B4'], {type: 3, length: 2});
myMusic.next('piano');

myMusic.play('piano', ['G3'], {type: 3, length: 1});
myMusic.next('piano');

myMusic.play('piano', ['C5'], {type: 3, length:1});
myMusic.play('piano', ['B3'], {type: 6, length:3});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'Ab3', 'B3', 'D4'], {type: 3, length: 2});
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['C5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.playSuccessive( 
  'piano', [ 'B4', 'C5', 'B4']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'A4'], {type: 3, length: 2});
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.play('piano', ['C4'], {type: 6, length:4});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2', 'A4'], {type: 3, length: 2});
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['A3', 'B4'], {type: 3, length: 1});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'A4'], {type: 3, length: 2});
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.play('piano', ['C4'], {type: 6, length:4});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['A4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3', 'F#3', 'A3'], {type: 6, length: 3});
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], {type: 6, length: 1});
myMusic.play('piano', ['A3'], {type: 6, length: 3});
myMusic.playSuccessive( 
  'piano', [ 'A4', 'B4', 'A4']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'G4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3', 'A4'], { type:3, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C3', 'G4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3', 'A4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['Db3', 'G4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3', 'F#4'], { type:3, length:1 });
myMusic.delay('piano', { type:6, length:6 });
myMusic.play('piano', ['G4'], { type:6, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2', 'E4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3', 'Eb4'], { type:6, length:4 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['F#4'], { type:6, length:4 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['E4'], { type:3, length:3 });
myMusic.play('piano', ['G4'], { type:6, length:4 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 });
myMusic.delay('piano', { type:6, length:6 });
myMusic.play('piano', ['F#4'], { type:6, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['Eb4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#4'], { type:6, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'G3', 'B3', 'E4'], { type:3, length:3 });
myMusic.next('piano');

myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['D5'], { type:6, length:2 });
myMusic.delay('piano', { type:6, length:7 });
myMusic.play('piano', ['Eb5'], { type:6, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['E5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'Ab3', 'B3', 'D4', 'D5'], { type:3, length:2 });
myMusic.next('piano', 2);

myMusic.play('piano', ['C5'], { type:6, length:3 });
myMusic.delay('piano', { type:6, length:3 });
myMusic.play('piano', ['B4'], { type:6, length:5 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:4 });
myMusic.play('piano', ['C5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'B4', 'A4', 'B4']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E4'], { type:3, length:2 });
myMusic.play('piano', ['C5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['C4'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'B4', 'C5', 'B4', 'C5']
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['A3', 'A4'], { type:6, length:4 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['B4'], { type:6, length:4 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['D3'], { type:3, length:4 });
myMusic.play('piano', ['C5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], {type: 3, length: 3});
myMusic.next('piano');

myMusic.play('piano', ['A3', 'D4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C4'], { type:3, length:3 });
myMusic.play('piano', ['C5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['A3'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['A4', 'F#3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['D3'], { type:3, length:4 });
myMusic.play('piano', ['B4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], {type: 3, length: 3});
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'A4', 'G4', 'A4']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['D4'], { type:3, length:4 });
myMusic.play('piano', ['B4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'A4', 'B4', 'A4', 'B4']
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['G3', 'G4'], { type:6, length:4 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['A4'], { type:6, length:4 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C3'], { type:3, length:4 });
myMusic.play('piano', ['B4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], {type: 3, length: 3});
myMusic.next('piano');

myMusic.play('piano', ['G3', 'C5'], { type:3, length:1});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C4'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3', 'A4'], {type: 3, length: 1});
myMusic.next('piano');

myMusic.play('piano', ['E3', 'G4'], { type:3, length:1});
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:4 });
myMusic.play('piano', ['A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], {type: 3, length: 3});
myMusic.next('piano');

myMusic.playSuccessive( 
  'piano', [ 'G4', 'F#4', 'G4']
  , { type:3, length: 1 }
);
myMusic.delay('piano', { type:6, length:2 });
myMusic.play('piano', ['F#3'], { type:6, length:6 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A3'], { type:3, length:3 });
myMusic.play('piano', ['A4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'G4', 'A4', 'G4', 'A4']
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], {type: 3, length: 1});
myMusic.playSuccessive( 
  'piano', [ 'F#4', 'G4']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:4 });
myMusic.play('piano', ['A4'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], {type: 3, length: 3});
myMusic.next('piano');

myMusic.play('piano', ['F#3', 'A4'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play('piano', ['A3'], { type:3, length:3 });
myMusic.play('piano', ['B4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3', 'D4'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], {type: 6, length: 2});
myMusic.play('piano', ['C5'], { type:3, length:1 });
myMusic.delay('piano', { type:6, length:5 });
myMusic.play('piano', ['D5'], { type:6, length:3 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['B4'], { type:3, length:4 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3', 'F#3', 'A3'], { type:3, length:1 });
myMusic.play('piano', ['G5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Eb5'], { type:6, length:6 });
myMusic.delay('piano', { type:6, length:6 });
myMusic.play('piano', ['F#5'], { type:6, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'G3', 'B3'], { type:3, length:3 });
myMusic.play('piano', ['E5'], { type:3, length:3 });
myMusic.play('piano', ['G5'], { type:6, length:2 });
myMusic.next('piano');

myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['D6'], { type:6, length:3 });
myMusic.delay('piano', { type:6, length:7 });
myMusic.play('piano', ['Eb6'], { type:6, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['E6'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3', 'Ab3', 'B3', 'D4'], { type:3, length:2 });
myMusic.play('piano', ['D6'], { type:3, length:2 });
myMusic.next('piano', 2);

myMusic.playSuccessive( 
  'piano', [ 'C6', 'B5']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A2'], { type:3, length:4 });
myMusic.play('piano', ['C6'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['C3'], { type:3, length:3 });
myMusic.next('piano');

myMusic.playSuccessive( 
  'piano', [ 'B5', 'A5', 'B5']
  , { type:3, length: 1 }
);
myMusic.play('piano', ['E3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A3'], { type:3, length:4 });
myMusic.play('piano', ['C6'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'B5', 'C6', 'B5', 'C6']
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['C3'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', [ 'A5', 'B5']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['D3'], { type:3, length:4 });
myMusic.play('piano', ['C6'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['A3', 'D6'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C4'], { type:3, length:2 });
myMusic.play('piano', ['C6'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['A3', 'B5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['A5'], { type:3, length:1 });
myMusic.play('piano', ['F#3'], { type:6, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['G2'], { type:3, length:4 });
myMusic.play('piano', ['B5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B2'], { type:3, length:3 });
myMusic.playSuccessive( 
  'piano', [ 'A5', 'G5', 'A5']
  , { type:3, length: 2 }
);
myMusic.next('piano');

myMusic.play('piano', ['D3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['G3'], { type:3, length:3 });
myMusic.play('piano', ['B5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['D3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', [ 'A5', 'B5', 'A5']
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['B2'], { type:6, length:4 });
myMusic.playSuccessive( 
  'piano', ['G5', 'A5']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C3'], { type:3, length:4 });
myMusic.play('piano', ['B5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['E3'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['G3', 'C6'], { type:3, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['C4'], { type:3, length:2 });
myMusic.play('piano', ['B5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:2 });
myMusic.play('piano', ['A5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['E3', 'G5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:4 });
myMusic.play('piano', ['A5'], { type:6, length:12 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:3 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.playSuccessive( 
  'piano', ['G5', 'F#5', 'G5']
  , { type:6, length: 12 }
);
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['A3'], { type:3, length:3 });
myMusic.play('piano', ['A5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:2 });
myMusic.playSuccessive( 
  'piano', ['G5', 'A5', 'G5', 'A5']
  , { type:3, length: 1 }
);
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', ['F#5', 'G5']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */

/* ********* Start Bar ************ */
myMusic.play('piano', ['B2', 'A5'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['F#3', 'B5'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['B5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Db3'], { type:3, length:1 });
myMusic.play('piano', ['G5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:1 });
myMusic.playSuccessive( 
  'piano', ['F#5', 'G5']
  , { type:3, length: 1 }
);
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['E3'], { type:3, length:2 });
myMusic.play('piano', ['E5'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['G3'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['B3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B2'], { type:3, length:2 });
myMusic.play('piano', ['Bb5'], { type:3, length:1 });
myMusic.next('piano');

myMusic.play('piano', ['Eb3'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['F#3'], { type:3, length:1 });
myMusic.next('piano');
/* ********** End Bar ************ */



/***************************************** Fade out *************************************************** */



/* ********* Start Bar ************ */
myMusic.play('piano', ['E2'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['G2'], { type:3, length:2 });
myMusic.next('piano');

myMusic.play('piano', ['B2'], { type:3, length:1 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['E3'], { type:6, length:4 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['G3'], { type:6, length:4 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['B3'], { type:6, length:4 });
myMusic.next('piano');

myMusic.play('piano', ['E4'], { type:3, length:12 });
myMusic.next('piano');

myMusic.play('piano', ['G4'], { type:3, length:11 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B4'], { type:3, length:10 });
myMusic.next('piano');

myMusic.play('piano', ['E5'], { type:3, length:3 });
myMusic.next('piano');

myMusic.play('piano', ['G5'], { type:3, length:2 });
myMusic.next('piano');
/* ********** End Bar ************ */


/* ********* Start Bar ************ */
myMusic.play('piano', ['B5'], { type:3, length:1 });
myMusic.delay('piano', { type:6, length:6 });
myMusic.play('piano', ['E6'], { type:6, length:2 });
myMusic.next('piano', 2);

myMusic.play('piano', ['E5'], { type:3, length:5 });
myMusic.delay('piano', { type:6, length:2 });
myMusic.play('piano', ['G5'], { type:3, length:5 });
myMusic.delay('piano', { type:6, length:4 });
myMusic.play('piano', ['B5'], { type:3, length:5 });
myMusic.next('piano');
/* ********** End Bar ************ */

myMusic.save('./demo/piano/soltan-ghalbha.mid');
