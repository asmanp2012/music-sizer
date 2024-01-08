import { GuitarFretType } from '@music-sizer/fret-guitar';

export type AchordType = [GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType];

const achordObject = {
  C: [0, 1, 0, 2, 3, 3],
  D: [2, 3, 2, 0, 0, 0],
  E: [0, 0, 1, 2, 2, 0],
  F: [1, 1, 2, 2, 3, 3],
  G: [3, 2, 0, 0, 0, 3],
  A: [0, 2, 2, 2, 0, 0],
  B: [2, 4, 4, 4, 2, 2],
  Cm: [3, 4, 5, 5, 3, 3],
  Dm: [1, 3, 2, 0, 0, 0],
  Em: [0, 0, 0, 2, 2, 0],
  Fm: [1, 1, 1, 3, 3, 1],
  Gm: [3, 3, 3, 5, 5, 3],
  Am: [0, 1, 2, 2, 0, 0],
  Bm: [2, 3, 4, 4, 2, 2],
  Bm2: [7, 9, 9, 7, 7, 7],
  Em7: [0, 3, 0, 2, 2, 0]
};

export type Achord = keyof typeof achordObject;
export const achordList = achordObject as Record<Achord, AchordType>;
