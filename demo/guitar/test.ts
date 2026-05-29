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

  guitar.halfDown_1({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (two != null)
  {
    guitar.pic(two);
  }
  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (three != null)
  {
    guitar.pic(three);
  }
  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);
}

rhythm(achordList.Em, null, null);
rhythm(null, null, null);
rhythm(null, null, null);
rhythm(null, achordList.Am, null);
rhythm(null, null, null);
rhythm(null, null, null);
rhythm(null, achordList.Em, null);
rhythm(achordList.C, null, null);
rhythm(null, null, null);
rhythm(achordList.Am, null, null);
rhythm(null, null, null);
myMusic.save('./demo/guitar/test.mid');
