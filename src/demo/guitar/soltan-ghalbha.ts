import { Music, Guitar } from '../../index.js';

const myMusic = new Music();

myMusic.tempo = 120;

myMusic.addInstrument('guitar');
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
}

const guitar = new Guitar('guitar', myMusic);
guitar.next(3);

/* ********* Start Bar ************ */
/* ********* Start Bar ************ */
guitar.SuccessiveSoloPlay(
  [[3,2], [2,0], [2,1], [1,0]],
  { type: 3, length: 4 }
);
guitar.next(5);

/* ********* Start Bar ************ */
/* ********* Start Bar ************ */
/* ********* Start Bar ************ */
/* ********* Start Bar ************ */
for (let index = 0; index < 5; index++) {
  guitar.SuccessiveSoloPlay(
    [[1,1], [1,0]],
    { type: 3, length: 2 }
  );
  if(index < 2) { guitar.next(3); }
  if(index >= 3) { guitar.next(2); }
}

/* ********* Start Bar ************ */
/* ********* Start Bar ************ */
for (let index = 0; index < 3; index++) {
  guitar.SuccessiveSoloPlay(
    [[2,3], null, [1,0]],
    { type: 3, length: 3 }
  );
  
  guitar.next(3);
}

/* ********* Start Bar ************ */
guitar.SuccessiveSoloPlay(
  [[2,3], [1,0]],
  { type: 3, length: 2 }
);
guitar.next(2);


for (let index = 0; index < 3; index++) {
  guitar.SuccessiveSoloPlay(
    [[2,3], [2,1]],
    { type: 3, length: 2 }
  );

  guitar.next(3);
}

guitar.soloPlay([2,0], { type: 3, length: 1, });
guitar.next(1);
guitar.soloPlay([3,2], { type: 3, length: 1, });
guitar.next(1);


myMusic.save('./demo/guitar/soltan-ghalbha.mid');
