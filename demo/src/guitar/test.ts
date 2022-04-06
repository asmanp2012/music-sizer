import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

guitar.pic(achordList.Am);
guitar.playSuccessive([1, 2, 3, 4, 5, 6]);

guitar.next(1);

guitar.pic(achordList.Em);
guitar.playSuccessive([1, 2, 3, 4, 5, 6]);

myMusic.save('./demo/guitar/test.mid');
