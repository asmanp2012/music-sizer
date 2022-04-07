import { Music } from '@music-sizer/main';
import type { TimeType, NoteType, BaseTimeType } from '@music-sizer/main';

export interface GuitarFretboardType extends Record<GuitarWireType, Record<GuitarFretType, NoteType>>
{
  stop: NoteType;
  stop2: NoteType;
}

export type GuitarWireType = 1 | 2 | 3 | 4 | 5 | 6;
export type GuitarFretType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
export type WireListType = Array<[GuitarWireType, GuitarFretType] | null>;

export interface baseGuitarPlayOption
{
  wireList: Array<[GuitarWireType, GuitarFretType] | null>;
  inputDuration?: TimeType;
  distansePerNote?: TimeType;
  velocity?: number;
}

export class BaseGuitar
{
  music: Music = new Music();
  trackName = 'Base guitar';
  constructor(trackName?: string, music?: Music)
  {
    if (music != null)
    {
      this.music = music;
    }

    if (trackName != null)
    {
      this.trackName = trackName;
    }
    this.music.addInstrument(this.trackName);
  }

  /**
   * play guitar wire
   *
   * @param {object} option parms for play guitar
   */
  play(option: baseGuitarPlayOption): void
  {
    if (option.wireList == null) { return; }
    /* Play with music  */
    this.music.play({
      instrument: this.trackName,
      noteList: this.convertWireToNoteList(option.wireList),
      inputDuration: option.inputDuration,
      velocity: option.velocity
    });
  }

  /**
   * play Successive time guitar wire
   *
   * @param {object} option parms for play guitar
   */
  playSuccessive(option: baseGuitarPlayOption): void
  {
    if (option.wireList == null) { return; }
    this.music.playSuccessive({
      instrument: this.trackName,
      noteList: this.convertWireToNoteList(option.wireList),
      inputDuration: option.inputDuration,
      distansePerNote: option.distansePerNote,
      velocity: option.velocity
    });
  }

  /**
   * play multi note with difrent start but same end
   *
   * @param {object} option params as a object
   */
  playMulti(option: baseGuitarPlayOption): void
  {
    if (option.wireList == null) { return; }
    this.music.playMulti({
      instrument: this.trackName,
      noteList: this.convertWireToNoteList(option.wireList),
      inputDuration: option.inputDuration,
      distansePerNote: option.distansePerNote,
      velocity: option.velocity
    });
  }

  next(number?: number): void
  {
    this.music.next(this.trackName, number);
  }

  delay(duration: BaseTimeType): void
  {
    this.music.delay(this.trackName, duration);
  }

  protected convertWireToNoteList(wireList: WireListType): Array<NoteType | null>
  {
    const noteList: Array<NoteType | null> = [];
    for (const wire of wireList)
    {
      if (wire == null) { noteList.push(null); continue; }
      const noteName = guitarFretboard[wire[0]][wire[1]];
      noteList.push(noteName);
    }
    return noteList;
  }
}

const guitarFretboard: GuitarFretboardType = {
  stop: 'C#6',
  stop2: 'D#6',
  1: {
    0: 'E4',
    1: 'F4',
    2: 'F#4',
    3: 'G4',
    4: 'G#4',
    5: 'A4',
    6: 'A#4',
    7: 'B4',
    8: 'C5',
    9: 'C#5',
    10: 'D5',
    11: 'D#5',
    12: 'E5',
    13: 'F5',
    14: 'F#5',
    15: 'G5',
    16: 'G#5',
    17: 'A5',
    18: 'A#5',
    19: 'B5'
  },
  2: {
    0: 'B3',
    1: 'C4',
    2: 'C#4',
    3: 'D4',
    4: 'D#4',
    5: 'E4',
    6: 'F4',
    7: 'F#4',
    8: 'G4',
    9: 'G#4',
    10: 'A4',
    11: 'A#4',
    12: 'B4',
    13: 'C5',
    14: 'C#5',
    15: 'D5',
    16: 'D#5',
    17: 'E5',
    18: 'F5',
    19: 'F#5',
  },
  3: {
    0: 'G3',
    1: 'G#3',
    2: 'A3',
    3: 'A#3',
    4: 'B3',
    5: 'C4',
    6: 'C#4',
    7: 'D4',
    8: 'D#4',
    9: 'E4',
    10: 'F4',
    11: 'F#4',
    12: 'G4',
    13: 'G#4',
    14: 'A4',
    15: 'A#4',
    16: 'B4',
    17: 'C5',
    18: 'C#5',
    19: 'D5'
  },
  4: {
    0: 'D3',
    1: 'D#3',
    2: 'E3',
    3: 'F3',
    4: 'F#3',
    5: 'G3',
    6: 'G#3',
    7: 'A3',
    8: 'A#3',
    9: 'B3',
    10: 'C4',
    11: 'C#4',
    12: 'D4',
    13: 'D#4',
    14: 'E4',
    15: 'F4',
    16: 'F#4',
    17: 'G4',
    18: 'G#4',
    19: 'A4',
  },
  5: {
    0: 'A2',
    1: 'A#2',
    2: 'B2',
    3: 'C3',
    4: 'C#3',
    5: 'D3',
    6: 'D#3',
    7: 'E3',
    8: 'F3',
    9: 'F#3',
    10: 'G3',
    11: 'G#3',
    12: 'A3',
    13: 'A#3',
    14: 'B3',
    15: 'C4',
    16: 'C#4',
    17: 'D4',
    18: 'D#4',
    19: 'E4',
  },
  6: {
    0: 'E2',
    1: 'F2',
    2: 'F#2',
    3: 'G2',
    4: 'G#2',
    5: 'A2',
    6: 'A#2',
    7: 'B2',
    8: 'C3',
    9: 'C#3',
    10: 'D3',
    11: 'D#3',
    12: 'E3',
    13: 'F3',
    14: 'F#3',
    15: 'G3',
    16: 'G#3',
    17: 'A3',
    18: 'A#3',
    19: 'B3'
  },
};
