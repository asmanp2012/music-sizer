import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

import type { AchordType } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 70;

myMusic.timeSignature = {
  numerator: 3,
  denominator: 4
};

/**
 *
 */
function rhythmWaltz(one: AchordType | null, two: AchordType | null, three: AchordType | null): void
{
  if (one != null)
  {
    guitar.pic(one);
  }

  guitar.halfDown_1_a({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (two != null)
  {
    guitar.pic(two);
  }
  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 }, strong: 2 });
  guitar.next(1);

  if (three != null)
  {
    guitar.pic(three);
  }
  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 }, strong: 2 });
  guitar.next(1);
  // guitar.syncope(2, { inputDuration: { type: 3, length: 1 }, velocity: 150 });
  // guitar.next(1);
}

/**
 *
 */
function rhythmDown(one: AchordType | null): void
{
  if (one != null)
  {
    guitar.pic(one);
  }

  guitar.down({ inputDuration: { type: 3, length: 3 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(3);
}

rhythmDown(achordList.Em);
// rhythmWaltz(achordList.Em, null, null);
rhythmWaltz(null, null, null);
rhythmWaltz(null, null, null);
rhythmWaltz(null, achordList.Am, null);
rhythmWaltz(null, null, null);
rhythmWaltz(null, null, null);
rhythmWaltz(achordList.Em, null, null);
rhythmWaltz(achordList.B, null, null);
rhythmWaltz(null, null, null);
rhythmWaltz(achordList.Am, null, null);
rhythmWaltz(null, null, null);
myMusic.save('./demo/guitar/soltan-ghalbha.mid');
