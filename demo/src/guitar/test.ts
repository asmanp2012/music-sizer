import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 60;

myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
};

guitar.pic(achordList.Am);
guitar.playSuccessive({ wireList: [1, 2, 3, 4, 5, 6] });

guitar.next(1);

guitar.pic(achordList.Em);
guitar.playSuccessive({ wireList: [1, 2, 3, 4, 5, 6] });

guitar.next(1);

guitar.moveBar(2);
guitar.playMulti({ wireList: [1, 2, 3, 4, 5, 6] });

guitar.next(1);
guitar.pic(achordList.Am);
guitar.playMulti({ wireList: [1, 2, 3, 4, 5, 6] });

myMusic.save('./demo/guitar/test.mid');
