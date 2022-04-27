import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 25;

myMusic.timeSignature = {
  numerator: 4,
  denominator: 4
};

guitar.pic(achordList.Em);
guitar.playMulti({
  wireList: [6, 5, 4, 3, 2, 1],
  inputDuration: { type: 3, length: 1 },
  distancePerNote: { type: 7, length: 1 }
}, true);

guitar.next(1);

guitar.pic(achordList.Am);
guitar.playMulti({
  wireList: [1, 2, 3, 4, 5, 6],
  inputDuration: { type: 4, length: 1 },
  distancePerNote: { type: 8, length: 1 }
}, true);

myMusic.playSuccessive({
  instrument: 'guitar',
  noteList: [null, 'C#6'],
  inputDuration: { type: 4, length: 1 },
  velocity: 120
});

myMusic.delay('guitar', { type: 4, length: 1 });

guitar.pic(achordList.Em);
guitar.playMulti({
  wireList: [1, 2, 3, 4, 5, 6],
  inputDuration: { type: 4, length: 1 },
  distancePerNote: { type: 8, length: 1 }
}, true);

myMusic.save('./demo/guitar/test.mid');
