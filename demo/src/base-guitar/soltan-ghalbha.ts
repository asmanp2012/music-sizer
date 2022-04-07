import { Music } from '@music-sizer/main';
import { BaseGuitar } from '@music-sizer/base-guitar';

const myMusic = new Music();

myMusic.tempo = 120;

myMusic.addInstrument('guitar');
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
};

const guitar = new BaseGuitar('guitar', myMusic);
guitar.next(3);

/* ********* Start Bar 1 ************ */
/* ********* Start Bar 2 ************ */
guitar.playSuccessive({
  wireList: [[3, 2], [2, 0], [2, 1], [1, 0]],
  inputDuration: { type: 3, length: 4 }
});
guitar.next(5);

/* ********* Start Bar 3 ************ */
/* ********* Start Bar 4 ************ */
/* ********* Start Bar 5 ************ */
/* ********* Start Bar 6 ************ */
for (let index = 0; index < 5; index++)
{
  guitar.playSuccessive({
    wireList: [[1, 1], [1, 0]],
    inputDuration: { type: 3, length: 2 }
  });
  if (index < 2) { guitar.next(3); }
  if (index >= 3) { guitar.next(2); }
}

/* ********* Start Bar 7 ************ */
/* ********* Start Bar 8 ************ */
for (let index = 0; index < 3; index++)
{
  guitar.playSuccessive({
    wireList: [[2, 3], null, [1, 0]],
    inputDuration: { type: 3, length: 3 }
  });

  guitar.next(3);
}

/* ********* Start Bar 9 ************ */
guitar.playSuccessive({
  wireList: [[2, 3], [1, 0]],
  inputDuration: { type: 3, length: 2 }
});
guitar.next(2);

/* ********* Start Bar 10 ************ */
/* ********* Start Bar 11 ************ */
/* ********* Start Bar 12 ************ */
for (let index = 0; index < 3; index++)
{
  guitar.playSuccessive({
    wireList: [[2, 3], [2, 1]],
    inputDuration: { type: 3, length: 2 }
  });

  guitar.next(3);
}

guitar.play({ wireList: [[2, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next();

/* ********* Start Bar 13 ************ */
guitar.play({ wireList: [[3, 2]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.playSuccessive({
  wireList: [[3, 1], [3, 2]],
  inputDuration: { type: 3, length: 1 }
});
guitar.next(1);

/* ********* Start Bar 14 ************ */
guitar.play({ wireList: [[2, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 15 ************ */
guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 16 ************ */
guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

// --------------------------------------------------------

/* ********* Start Bar 17 ************ */
/* ********* Start Bar 18 ************ */
guitar.playSuccessive({
  wireList: [[3, 2], [2, 0], [2, 1], [1, 0]],
  inputDuration: { type: 3, length: 4 }
});
guitar.next(5);

/* ********* Start Bar 19 ************ */
/* ********* Start Bar 20 ************ */
/* ********* Start Bar 21 ************ */
/* ********* Start Bar 22 ************ */
for (let index = 0; index < 5; index++)
{
  guitar.playSuccessive({
    wireList: [[1, 1], [1, 0]],
    inputDuration: { type: 3, length: 2 }
  });
  if (index < 2) { guitar.next(3); }
  if (index >= 3) { guitar.next(2); }
}

/* ********* Start Bar 23 ************ */
/* ********* Start Bar 24 ************ */
for (let index = 0; index < 3; index++)
{
  guitar.playSuccessive({
    wireList: [[2, 3], null, [1, 0]],
    inputDuration: { type: 3, length: 3 }
  });

  guitar.next(3);
}

/* ********* Start Bar 25 ************ */
guitar.playSuccessive({
  wireList: [[2, 3], [1, 0]],
  inputDuration: { type: 3, length: 2 }
});
guitar.next(2);

/* ********* Start Bar 26 ************ */
/* ********* Start Bar 27 ************ */
/* ********* Start Bar 28 ************ */
for (let index = 0; index < 3; index++)
{
  guitar.playSuccessive({
    wireList: [[2, 3], [2, 1]],
    inputDuration: { type: 3, length: 2 }
  });

  guitar.next(3);
}

guitar.play({ wireList: [[2, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next();

/* ********* Start Bar 29 ************ */
guitar.play({ wireList: [[3, 2]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.playSuccessive({
  wireList: [[3, 1], [2, 0]],
  inputDuration: { type: 3, length: 1 }
});
guitar.next(1);

/* ********* Start Bar 30 ************ */
/* ********* Start Bar 31 ************ */
guitar.play({ wireList: [[3, 2]], inputDuration: { type: 3, length: 4 } });
guitar.next(6);

/* ********* Start Bar 32 ************ */
guitar.next(2);
guitar.play({ wireList: [[1, 5]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 33 ************ */
guitar.playSuccessive({ wireList: [[1, 3], [1, 1], [1, 0]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 34 ************ */
/* ********* Start Bar 35 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, [1, 0], [2, 3], null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 36 ************ */
guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [[1, 3]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 37 ************ */
guitar.playSuccessive({ wireList: [[1, 1], [1, 0], [2, 3]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 38 ************ */
/* ********* Start Bar 39 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, [2, 3], [2, 1], null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 40 ************ */
guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 41 ************ */
guitar.playSuccessive({ wireList: [[1, 0], [2, 3], [2, 1]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 42 ************ */
/* ********* Start Bar 43 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [[2, 3]], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, [2, 1], [2, 0], null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 44 ************ */
guitar.play({ wireList: [[2, 3]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [[2, 3]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 45 ************ */
guitar.playSuccessive({ wireList: [[1, 0], [1, 3], [1, 1]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 46 ************ */
guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 47 ************ */
guitar.play({ wireList: [[1, 4]], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 48 ************ */
guitar.play({ wireList: [[1, 5]], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 49 ************ */
guitar.next(2);
guitar.play({ wireList: [[1, 5]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 50 ************ */
guitar.playSuccessive({ wireList: [[1, 3], [1, 1], [1, 0]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 51 ************ */
/* ********* Start Bar 52 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, [1, 0], [2, 3], null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 53 ************ */
guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [[1, 3]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 54 ************ */
guitar.playSuccessive({ wireList: [[1, 1], [1, 0], [2, 3]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 55 ************ */
/* ********* Start Bar 56 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, [2, 3], [2, 1], null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 57 ************ */
guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [[1, 1]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 58 ************ */
guitar.playSuccessive({ wireList: [[1, 0], [2, 3], [2, 1]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 59 ************ */
/* ********* Start Bar 60 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [[2, 3]], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, [2, 1], [2, 0], null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 61 ************ */
guitar.play({ wireList: [[2, 3]], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [[1, 0]], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 62 ************ */
guitar.playSuccessive({ wireList: [[1, 0], [2, 1], [2, 0]], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 63 ************ */
/* ********* Start Bar 64 ************ */
guitar.play({ wireList: [[3, 2]], inputDuration: { type: 3, length: 4 } });
guitar.next(6);

myMusic.save('./demo/base-guitar/soltan-ghalbha.mid');
