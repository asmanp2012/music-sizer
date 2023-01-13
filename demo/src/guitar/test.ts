import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

import type { AchordType } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 25;

myMusic.timeSignature = {
  numerator: 2,
  denominator: 4
};

/**
 *
 */
function rhythm(one: AchordType | null, two: AchordType | null, three: AchordType | null): void
{
  if (one != null)
  {
    guitar.pic(one);
  }
  guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (two != null)
  {
    guitar.pic(two);
  }
  guitar.up({ inputDuration: { type: 4, length: 1 }, silenceInHalf: true });

  guitar.delay({ type: 4, length: 1 });
  if (three != null)
  {
    guitar.pic(three);
  }
  guitar.up({ inputDuration: { type: 4, length: 1 } });
  guitar.next(1);
}

rhythm(achordList.Em, achordList.Am, achordList.C);
rhythm(achordList.Am, null, achordList.D);
rhythm(achordList.Am, achordList.Em, achordList.E);
rhythm(null, achordList.Em, achordList.Am);
rhythm(null, null, achordList.Em);
rhythm(achordList.D, null, achordList.Am);
rhythm(achordList.D, null, achordList.Dm);
myMusic.save('./demo/guitar/test.mid');
