import { Music, SoloGuitar } from '../../index.js';

const myMusic = new Music();

myMusic.tempo = 120;

myMusic.addInstrument('guitar');
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
}

const guitar = new SoloGuitar('guitar', myMusic);
guitar.next(3);

/* ********* Start Bar 1 ************ */
/* ********* Start Bar 2 ************ */
guitar.successivePlay(
  [[3,2], [2,0], [2,1], [1,0]],
  { type: 3, length: 4 }
);
guitar.next(5);

/* ********* Start Bar 3 ************ */
/* ********* Start Bar 4 ************ */
/* ********* Start Bar 5 ************ */
/* ********* Start Bar 6 ************ */
for (let index = 0; index < 5; index++) {
  guitar.successivePlay(
    [[1,1], [1,0]],
    { type: 3, length: 2 }
  );
  if(index < 2) { guitar.next(3); }
  if(index >= 3) { guitar.next(2); }
}

/* ********* Start Bar 7 ************ */
/* ********* Start Bar 8 ************ */
for (let index = 0; index < 3; index++) {
  guitar.successivePlay(
    [[2,3], null, [1,0]],
    { type: 3, length: 3 }
  );
  
  guitar.next(3);
}

/* ********* Start Bar 9 ************ */
guitar.successivePlay(
  [[2,3], [1,0]],
  { type: 3, length: 2 }
);
guitar.next(2);

/* ********* Start Bar 10 ************ */
/* ********* Start Bar 11 ************ */
/* ********* Start Bar 12 ************ */
for (let index = 0; index < 3; index++) {
  guitar.successivePlay(
    [[2,3], [2,1]],
    { type: 3, length: 2 }
  );

  guitar.next(3);
}

guitar.play([2,0], { type: 3, length: 1 });
guitar.next();

/* ********* Start Bar 13 ************ */
guitar.play([3, 2], { type: 3, length: 1 });
guitar.next(2);

guitar.successivePlay(
  [[3,1],[3,2]],
  { type: 3, length: 1, }
);
guitar.next(1);

/* ********* Start Bar 14 ************ */
guitar.play([2,0], { type: 3, length: 1, });
guitar.next(3);

/* ********* Start Bar 15 ************ */
guitar.play([1,1], { type: 3, length: 1, });
guitar.next(3);

/* ********* Start Bar 16 ************ */
guitar.play([1,0], { type: 3, length: 1, });
guitar.next(3);


// --------------------------------------------------------


/* ********* Start Bar 17 ************ */
/* ********* Start Bar 18 ************ */
guitar.successivePlay(
  [[3,2], [2,0], [2,1], [1,0]],
  { type: 3, length: 4 }
);
guitar.next(5);

/* ********* Start Bar 19 ************ */
/* ********* Start Bar 20 ************ */
/* ********* Start Bar 21 ************ */
/* ********* Start Bar 22 ************ */
for (let index = 0; index < 5; index++) {
  guitar.successivePlay(
    [[1,1], [1,0]],
    { type: 3, length: 2 }
  );
  if(index < 2) { guitar.next(3); }
  if(index >= 3) { guitar.next(2); }
}

/* ********* Start Bar 23 ************ */
/* ********* Start Bar 24 ************ */
for (let index = 0; index < 3; index++) {
  guitar.successivePlay(
    [[2,3], null, [1,0]],
    { type: 3, length: 3 }
  );
  
  guitar.next(3);
}

/* ********* Start Bar 25 ************ */
guitar.successivePlay(
  [[2,3], [1,0]],
  { type: 3, length: 2 }
);
guitar.next(2);

/* ********* Start Bar 26 ************ */
/* ********* Start Bar 27 ************ */
/* ********* Start Bar 28 ************ */
for (let index = 0; index < 3; index++) {
  guitar.successivePlay(
    [[2,3], [2,1]],
    { type: 3, length: 2 }
  );

  guitar.next(3);
}

guitar.play([2,0], { type: 3, length: 1 });
guitar.next();

/* ********* Start Bar 29 ************ */
guitar.play([3,2], { type: 3, length: 1 });
guitar.next(2);

guitar.successivePlay(
  [[3,1],[2,0]],
  { type: 3, length: 1, }
);
guitar.next(1);


/* ********* Start Bar 30 ************ */
/* ********* Start Bar 31 ************ */
guitar.play([3,2], { type: 3, length: 4 });
guitar.next(6);

/* ********* Start Bar 32 ************ */
guitar.next(2);
guitar.play([1,5], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 33 ************ */
guitar.successivePlay([[1,3], [1,1], [1,0]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 34 ************ */
/* ********* Start Bar 35 ************ */
for (let index = 0; index < 2; index++) {
  guitar.play([1,1], { type: 3, length: 1 });
  guitar.next(1);

  guitar.successivePlay(
    [null, [1,0], [2,3], null],
    { type: 3, length: 2 }
  );
  guitar.next(2);
}

/* ********* Start Bar 36 ************ */
guitar.play([1,1], { type: 3, length: 1 });
guitar.next(2);

guitar.play([1,3], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 37 ************ */
guitar.successivePlay([[1,1], [1,0], [2,3]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 38 ************ */
/* ********* Start Bar 39 ************ */
for (let index = 0; index < 2; index++) {
  guitar.play([1,0], { type: 3, length: 1 });
  guitar.next(1);

  guitar.successivePlay(
    [null, [2,3], [2,1], null],
    { type: 3, length: 2 }
  );
  guitar.next(2);
}

/* ********* Start Bar 40 ************ */
guitar.play([1,0], { type: 3, length: 1 });
guitar.next(2);

guitar.play([1,1], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 41 ************ */
guitar.successivePlay( [[1,0], [2,3], [2,1]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 42 ************ */
/* ********* Start Bar 43 ************ */
for (let index = 0; index < 2; index++) {
  guitar.play([2,3], { type: 3, length: 1 });
  guitar.next(1);

  guitar.successivePlay(
    [null, [2,1], [2,0], null],
    { type: 3, length: 2 }
  );
  guitar.next(2);
}

/* ********* Start Bar 44 ************ */
guitar.play([2,3], { type: 3, length: 1 });
guitar.next(2);

guitar.play([2,3], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 45 ************ */
guitar.successivePlay( [[1,0], [1,3], [1,1]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 46 ************ */
guitar.play([1,0], { type: 3, length: 1 });
guitar.next(3);

/* ********* Start Bar 47 ************ */
guitar.play([1,4], { type: 3, length: 1 });
guitar.next(3);

/* ********* Start Bar 48 ************ */
guitar.play([1,5], { type: 3, length: 1 });
guitar.next(3);

/* ********* Start Bar 49 ************ */
guitar.next(2);
guitar.play([1,5], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 50 ************ */
guitar.successivePlay([[1,3], [1,1], [1,0]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 51 ************ */
/* ********* Start Bar 52 ************ */
for (let index = 0; index < 2; index++) {
  guitar.play([1,1], { type: 3, length: 1 });
  guitar.next(1);

  guitar.successivePlay(
    [null, [1,0], [2,3], null],
    { type: 3, length: 2 }
  );
  guitar.next(2);
}

/* ********* Start Bar 53 ************ */
guitar.play([1,1], { type: 3, length: 1 });
guitar.next(2);

guitar.play([1,3], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 54 ************ */
guitar.successivePlay([[1,1], [1,0], [2,3]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 55 ************ */
/* ********* Start Bar 56 ************ */
for (let index = 0; index < 2; index++) {
  guitar.play([1,0], { type: 3, length: 1 });
  guitar.next(1);

  guitar.successivePlay(
    [null, [2,3], [2,1], null],
    { type: 3, length: 2 }
  );
  guitar.next(2);
}

/* ********* Start Bar 57 ************ */
guitar.play([1,0], { type: 3, length: 1 });
guitar.next(2);

guitar.play([1,1], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 58 ************ */
guitar.successivePlay( [[1,0], [2,3], [2,1]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 59 ************ */
/* ********* Start Bar 60 ************ */
for (let index = 0; index < 2; index++) {
  guitar.play([2,3], { type: 3, length: 1 });
  guitar.next(1);

  guitar.successivePlay(
    [null, [2,1], [2,0], null],
    { type: 3, length: 2 }
  );
  guitar.next(2);
}

/* ********* Start Bar 61 ************ */
guitar.play([2,3], { type: 3, length: 1 });
guitar.next(2);

guitar.play([1,0], { type: 3, length: 1 });
guitar.next(1);

/* ********* Start Bar 62 ************ */
guitar.successivePlay( [[1,0], [2,1], [2,0]], { type: 3, length: 3 });
guitar.next(3);

/* ********* Start Bar 63 ************ */
/* ********* Start Bar 64 ************ */
guitar.play([3,2], { type: 3, length: 4 });
guitar.next(6);

myMusic.save('./demo/guitar/soltan-ghalbha.mid');
