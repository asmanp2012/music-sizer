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

guitar.soloPlay(3,2, oneBeat);
guitar.next();

guitar.soloPlay(2,0, oneBeat);
guitar.next();

guitar.soloPlay(2,1, oneBeat);
guitar.next();

for (let index = 0; index < 3; index++) {
  guitar.soloPlay(1,0, { type: 4, length: 3 });
  guitar.next();

  guitar.delay({ type: 4, length: 1 })
  guitar.soloPlay(1,1, { type: 4, length: 3 });
  guitar.next(2);
}
  
guitar.soloPlay(1,0, { type: 4, length: 3 });
guitar.next();

myMusic.save('./demo/guitar/soltan-ghalbha.mid');
