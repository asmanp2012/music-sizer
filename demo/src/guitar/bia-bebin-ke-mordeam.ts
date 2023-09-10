import { Music } from '@music-sizer/main';
import { Guitar, achordList } from '@music-sizer/guitar';

import type { AchordType } from '@music-sizer/guitar';

const myMusic = new Music();
const guitar = new Guitar('guitar', myMusic);

myMusic.tempo = 25;

myMusic.timeSignature = {
  numerator: 6,
  denominator: 8
};

/**
 *
 */
function rhythm68Simple(
  one: AchordType | null,
  two: AchordType | null,
  three: AchordType | null,
  four: AchordType | null,
  five: AchordType | null,
  six: AchordType | null,
  seven: AchordType | null
): void
{
  if (one != null) { guitar.pic(one); }
  guitar.halfDown_1({ inputDuration: { type: 4, length: 1 } });
  guitar.next(1);

  if (two != null) { guitar.pic(two); }
  guitar.halfDown_2({ inputDuration: { type: 5, length: 1 } });
  guitar.delay({ type: 5, length: 1 });

  if (three != null) { guitar.pic(three); }
  guitar.halfUp_1({ inputDuration: { type: 5, length: 1 } });
  guitar.next(1);

  if (four != null) { guitar.pic(four); }
  guitar.halfDown_2({ inputDuration: { type: 5, length: 1 } });
  guitar.delay({ type: 5, length: 1 });

  if (five != null) { guitar.pic(five); }
  guitar.halfUp_1({ inputDuration: { type: 5, length: 1 } });
  guitar.next(1);

  if (seven != null) { guitar.pic(seven); }
  guitar.halfDown_1({ inputDuration: { type: 4, length: 1 } });
  guitar.next(1);

  if (six != null) { guitar.pic(six); }
  guitar.down({ inputDuration: { type: 4, length: 2 }, distancePerNote: { type: 9, length: 1 } });
  guitar.next(2);
}

rhythm68Simple(achordList.Em, null, null, null, null, null, null);
rhythm68Simple(null, null, achordList.Am, null, null, null, null);
rhythm68Simple(null, null, null, null, null, null, null);
rhythm68Simple(null, null, achordList.F, null, null, achordList.Em, null);
rhythm68Simple(null, null, achordList.F, null, null, achordList.Em, null);
rhythm68Simple(achordList.Am, null, null, null, null, null, null);
rhythm68Simple(null, null, achordList.Am, null, null, achordList.Em, null);
rhythm68Simple(null, null, achordList.Bm, null, null, achordList.A, null);
rhythm68Simple(achordList.Am, null, null, null, null, null, null);
rhythm68Simple(null, null, achordList.Bm, null, null, null, null);
rhythm68Simple(achordList.C, null, achordList.D, null, achordList.Em, null, null);
rhythm68Simple(achordList.Am, null, null, null, null, null, null);
rhythm68Simple(achordList.C, null, achordList.D, null, achordList.Em, null, null);
rhythm68Simple(achordList.G, achordList.D, null, achordList.Em, null, achordList.Bm, null);
rhythm68Simple(achordList.Em, achordList.D, null, achordList.Am, null, achordList.Em, null);

myMusic.save('./demo/guitar/bia-bebin-ke-mordeam.mid');
