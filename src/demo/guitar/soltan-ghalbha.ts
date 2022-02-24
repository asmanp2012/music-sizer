import { Music, Guitar } from '../../index.js';

const myMusic = new Music();

myMusic.tempo = 140;

myMusic.addInstrument('guitar');
myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
}

const guitar = new Guitar('guitar', myMusic);
const oneBeat = { type: 3, length: 1 };

guitar.SuccessiveSoloPlay(
  [[3,2], [2,0], [2,1], [1,0]],
  { type: 4, length: 9 }
);
guitar.next(5);

for (let index = 0; index < 3; index++) {
  guitar.SuccessiveSoloPlay(
    [[1,1], [1,0]],
    { type: 3, length: 2 }
  );
  guitar.next(3);
}

guitar.next();
guitar.soloPlay([1,0], { type: 3, length: 1 });


myMusic.save('./demo/guitar/soltan-ghalbha.mid');
