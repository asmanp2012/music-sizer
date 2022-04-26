import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 60;

myMusic.timeSignature = {
  numerator: 4,
  denominator: 4
};

guitar.pic(achordList.Am);
guitar.playMulti({
  wireList: [6, 5, 4, 3, 2, 1],
  inputDuration: { type: 3, length: 1 },
  distancePerNote: { type: 4, length: 1 }
});

guitar.next(1);

guitar.pic(achordList.Em);
guitar.playSuccessive({ wireList: [1, 2, 3, 4, 5, 6] });

guitar.next(1);

myMusic.save('./demo/guitar/test.mid');
