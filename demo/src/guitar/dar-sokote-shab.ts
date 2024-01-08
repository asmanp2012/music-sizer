import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

import type { AchordType } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 60;

myMusic.timeSignature = {
  numerator: 6,
  denominator: 8
};

/**
 *
 */
function rhythm68slowRock(
  one: AchordType | null,
  two: AchordType | null,
  three: AchordType | null,
  four: AchordType | null,
  five: AchordType | null,
  six: AchordType | null,
  seven: AchordType | null,
  eight: AchordType | null
): void
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
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (three != null)
  {
    guitar.pic(three);
  }

  guitar.halfUp_1({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (four != null)
  {
    guitar.pic(four);
  }

  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (five != null)
  {
    guitar.pic(five);
  }

  guitar.halfUp_1({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (six != null)
  {
    guitar.pic(six);
  }

  guitar.halfDown_1({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (seven != null)
  {
    guitar.pic(seven);
  }

  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 } });
  // guitar.down({ inputDuration: { type: 3, length: 1 } });
  guitar.next(1);

  if (eight != null)
  {
    guitar.pic(eight);
  }
  guitar.halfDown_2({ inputDuration: { type: 3, length: 1 } });
  guitar.next(2);
}

rhythm68slowRock(achordList.Em, null, null, null, null, null, null, null);
rhythm68slowRock(achordList.Em, null, null, null, null, null, null, null);
rhythm68slowRock(achordList.Bm, null, null, null, null, null, null, null);
rhythm68slowRock(achordList.Bm, null, null, null, null, null, null, null);
rhythm68slowRock(achordList.C, null, null, null, null, null, null, null);
rhythm68slowRock(achordList.C, null, null, null, null, null, null, null);
rhythm68slowRock(achordList.Bm, null, null, null, null, null, null, null);

myMusic.save('./demo/guitar/dar-sokote-shab.mid');
