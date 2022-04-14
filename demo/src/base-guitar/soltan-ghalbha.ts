import { Music } from '@music-sizer/main';
import { FretGuitar } from '@music-sizer/fret-guitar';

const myMusic = new Music();

myMusic.tempo = 120;

myMusic.addInstrument('guitar');
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
};

const guitar = new FretGuitar('guitar', myMusic);
guitar.next(3);

/* ********* Start Bar 1 ************ */
/* ********* Start Bar 2 ************ */
guitar.playSuccessive(
  {
    wireList: [{ w: 3, f: 2 }, { w: 2 }, { w: 2, f: 1 }, { w: 1 }],
    inputDuration: { type: 3, length: 4 }
  }
);
guitar.next(5);

/* ********* Start Bar 3 ************ */
/* ********* Start Bar 4 ************ */
/* ********* Start Bar 5 ************ */
/* ********* Start Bar 6 ************ */
for (let index = 0; index < 5; index++)
{
  guitar.playSuccessive({
    wireList: [{ w: 1, f: 1 }, { w: 1 }],
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
    wireList: [{ w: 2, f: 3 }, null, { w: 1 }],
    inputDuration: { type: 3, length: 3 }
  });

  guitar.next(3);
}

/* ********* Start Bar 9 ************ */
guitar.playSuccessive({
  wireList: [{ w: 2, f: 3 }, { w: 1 }],
  inputDuration: { type: 3, length: 2 }
});
guitar.next(2);

/* ********* Start Bar 10 ************ */
/* ********* Start Bar 11 ************ */
/* ********* Start Bar 12 ************ */
for (let index = 0; index < 3; index++)
{
  guitar.playSuccessive({
    wireList: [{ w: 2, f: 3 }, { w: 2, f: 1 }],
    inputDuration: { type: 3, length: 2 }
  });

  guitar.next(3);
}

guitar.play({ wireList: [{ w: 2 }], inputDuration: { type: 3, length: 1 } });
guitar.next();

/* ********* Start Bar 13 ************ */
guitar.play({ wireList: [{ w: 3, f: 2 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.playSuccessive({
  wireList: [{ w: 3, f: 1 }, { w: 3, f: 2 }],
  inputDuration: { type: 3, length: 1 }
});
guitar.next(1);

/* ********* Start Bar 14 ************ */
guitar.play({ wireList: [{ w: 2 }], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 15 ************ */
guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 16 ************ */
guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

// --------------------------------------------------------

/* ********* Start Bar 17 ************ */
/* ********* Start Bar 18 ************ */
guitar.playSuccessive({
  wireList: [{ w: 3, f: 2 }, { w: 2 }, { w: 2, f: 1 }, { w: 1 }],
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
    wireList: [{ w: 1, f: 1 }, { w: 1 }],
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
    wireList: [{ w: 2, f: 3 }, null, { w: 1 }],
    inputDuration: { type: 3, length: 3 }
  });

  guitar.next(3);
}

/* ********* Start Bar 25 ************ */
guitar.playSuccessive({
  wireList: [{ w: 2, f: 3 }, { w: 1 }],
  inputDuration: { type: 3, length: 2 }
});
guitar.next(2);

/* ********* Start Bar 26 ************ */
/* ********* Start Bar 27 ************ */
/* ********* Start Bar 28 ************ */
for (let index = 0; index < 3; index++)
{
  guitar.playSuccessive({
    wireList: [{ w: 2, f: 3 }, { w: 2, f: 1 }],
    inputDuration: { type: 3, length: 2 }
  });

  guitar.next(3);
}

guitar.play({ wireList: [{ w: 2 }], inputDuration: { type: 3, length: 1 } });
guitar.next();

/* ********* Start Bar 29 ************ */
guitar.play({ wireList: [{ w: 3, f: 2 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.playSuccessive({
  wireList: [{ w: 3, f: 1 }, { w: 2 }],
  inputDuration: { type: 3, length: 1 }
});
guitar.next(1);

/* ********* Start Bar 30 ************ */
/* ********* Start Bar 31 ************ */
guitar.play({ wireList: [{ w: 3, f: 2 }], inputDuration: { type: 3, length: 4 } });
guitar.next(6);

/* ********* Start Bar 32 ************ */
guitar.next(2);
guitar.play({ wireList: [{ w: 1, f: 5 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 33 ************ */
guitar.playSuccessive({ wireList: [{ w: 1, f: 3 }, { w: 1, f: 1 }, { w: 1 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 34 ************ */
/* ********* Start Bar 35 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, { w: 1 }, { w: 2, f: 3 }, null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 36 ************ */
guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [{ w: 1, f: 3 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 37 ************ */
guitar.playSuccessive({ wireList: [{ w: 1, f: 1 }, { w: 1 }, { w: 2, f: 3 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 38 ************ */
/* ********* Start Bar 39 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, { w: 2, f: 3 }, { w: 2, f: 1 }, null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 40 ************ */
guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 41 ************ */
guitar.playSuccessive({ wireList: [{ w: 1 }, { w: 2, f: 3 }, { w: 2, f: 1 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 42 ************ */
/* ********* Start Bar 43 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [{ w: 2, f: 3 }], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, { w: 2, f: 1 }, { w: 2 }, null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 44 ************ */
guitar.play({ wireList: [{ w: 2, f: 3 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [{ w: 2, f: 3 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 45 ************ */
guitar.playSuccessive({ wireList: [{ w: 1 }, { w: 1, f: 3 }, { w: 1, f: 1 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 46 ************ */
guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 47 ************ */
guitar.play({ wireList: [{ w: 1, f: 4 }], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 48 ************ */
guitar.play({ wireList: [{ w: 1, f: 5 }], inputDuration: { type: 3, length: 1 } });
guitar.next(3);

/* ********* Start Bar 49 ************ */
guitar.next(2);
guitar.play({ wireList: [{ w: 1, f: 5 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 50 ************ */
guitar.playSuccessive({ wireList: [{ w: 1, f: 3 }, { w: 1, f: 1 }, { w: 1 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 51 ************ */
/* ********* Start Bar 52 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, { w: 1 }, { w: 2, f: 3 }, null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 53 ************ */
guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [{ w: 1, f: 3 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 54 ************ */
guitar.playSuccessive({ wireList: [{ w: 1, f: 1 }, { w: 1 }, { w: 2, f: 3 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 55 ************ */
/* ********* Start Bar 56 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, { w: 2, f: 3 }, { w: 2, f: 1 }, null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 57 ************ */
guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [{ w: 1, f: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 58 ************ */
guitar.playSuccessive({ wireList: [{ w: 1 }, { w: 2, f: 3 }, { w: 2, f: 1 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 59 ************ */
/* ********* Start Bar 60 ************ */
for (let index = 0; index < 2; index++)
{
  guitar.play({ wireList: [{ w: 2, f: 3 }], inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  guitar.playSuccessive({
    wireList: [null, { w: 2, f: 1 }, { w: 2 }, null],
    inputDuration: { type: 3, length: 2 }
  });
  guitar.next(2);
}

/* ********* Start Bar 61 ************ */
guitar.play({ wireList: [{ w: 2, f: 3 }], inputDuration: { type: 3, length: 1 } });
guitar.next(2);

guitar.play({ wireList: [{ w: 1 }], inputDuration: { type: 3, length: 1 } });
guitar.next(1);

/* ********* Start Bar 62 ************ */
guitar.playSuccessive({ wireList: [{ w: 1 }, { w: 2, f: 1 }, { w: 2 }], inputDuration: { type: 3, length: 3 } });
guitar.next(3);

/* ********* Start Bar 63 ************ */
/* ********* Start Bar 64 ************ */
guitar.play({ wireList: [{ w: 3, f: 2 }], inputDuration: { type: 3, length: 4 } });
guitar.next(6);

myMusic.save('./demo/base-guitar/soltan-ghalbha.mid');
