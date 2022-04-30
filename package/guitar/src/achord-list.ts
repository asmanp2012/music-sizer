import { GuitarFretType } from '@music-sizer/fret-guitar';

export type AchordType = [GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType];

const achordObject = {
  E: [0, 0, 1, 2, 2, 0],
  Em: [0, 0, 0, 2, 2, 0],
  Em7: [0, 3, 0, 2, 2, 0],
  Am: [0, 1, 2, 2, 0, 0],
  D: [2, 3, 2, 0, 0, 0],
  Dm: [1, 3, 2, 0, 0, 0],
  C: [0, 1, 0, 2, 3, 0],
};

export type Achord = keyof typeof achordObject;
export const achordList = achordObject as Record<Achord, AchordType>;
