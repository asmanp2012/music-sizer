import { Music } from '@music-sizer/main';
import type { TimeType, NoteType, BaseTimeType } from '@music-sizer/main';

export interface GuitarFretboardType extends Record<GuitarWireType, Record<GuitarFretType, NoteType>>
{
  stop: NoteType;
  stop2: NoteType;
}

export type GuitarWireType = 1 | 2 | 3 | 4 | 5 | 6;
export type GuitarFretType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
export type WireListType = Array<{ w: GuitarWireType; f?: GuitarFretType; } | null>;

export interface baseGuitarPlayOption
{
  wireList: WireListType;
  inputDuration?: TimeType;
  distancePerNote?: TimeType;
  velocity?: number;
}

export class FretGuitar
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
      distancePerNote: option.distancePerNote,
      velocity: option.velocity
    });
  }

  /**
   * play multi note with difrent start but same end
   *
   * @param {object} option params as a object
   */
  playMulti(
    option: baseGuitarPlayOption,
    sameEnd: boolean = false
  ): void
  {
    if (option.wireList == null) { return; }
    this.music.playMulti({
      instrument: this.trackName,
      noteList: this.convertWireToNoteList(option.wireList),
      inputDuration: option.inputDuration,
      distancePerNote: option.distancePerNote,
      velocity: option.velocity
    }, sameEnd);
  }

  next(number?: number): void
  {
    this.music.next(this.trackName, number);
  }

  delay(duration: BaseTimeType): void
  {
    this.music.delay(this.trackName, duration);
  }

  protected convertWireToNoteList(wireList: WireListType): Array<number | null>
  {
    const noteList: Array<number | null> = [];
    for (const wire of wireList)
    {
      if (wire == null) { noteList.push(null); continue; }
      const noteName = guitarNotation[wire.w] + (wire.f ?? 0);
      noteList.push(noteName);
    }
    return noteList;
  }
}

const guitarNotation = {
  1: 64, // E4
  2: 59, // B3
  3: 55, // G3
  4: 50, // D3
  5: 45, // A2
  6: 40 // E2
};
