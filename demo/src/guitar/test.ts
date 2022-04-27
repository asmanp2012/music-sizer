import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 120;

myMusic.timeSignature = {
  numerator: 4,
  denominator: 4
};

guitar.pic(achordList.Am);
guitar.playMulti({
  wireList: [6, 5, 4, 3, 2, 1],
  inputDuration: { type: 3, length: 1 },
  distancePerNote: { type: 7, length: 1 }
});

guitar.next(1);

guitar.playMulti({
  wireList: [1, 2, 3, 4, 5, 6],
  inputDuration: { type: 4, length: 1 },
  distancePerNote: { type: 8, length: 1 }
});
guitar.delay({ type: 4, length: 1 });
myMusic.play({
  instrument: 'guitar',
  noteList: ['C#6']
});

guitar.next(1);

myMusic.save('./demo/guitar/test.mid');
