import { GuitarFretType } from '@music-sizer/fret-guitar';

export type AchordType = [GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType];

const achordObject = {
  Em: [0, 0, 0, 2, 2, 0],
  Am: [0, 1, 2, 2, 0, 0],
  D: [2, 3, 2, 0, 0, 0]
};

export type Achord = keyof typeof achordObject;
export const achordList = achordObject as Record<Achord, AchordType>;
