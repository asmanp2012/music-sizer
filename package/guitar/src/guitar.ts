import { Music } from '@music-sizer/main';
import { FretGuitar, GuitarWireType, GuitarFretType } from '@music-sizer/fret-guitar';
import type { TimeType, BaseTimeType } from '@music-sizer/main';
import type { AchordType } from './achord-list.js';
export interface GuitarPlayOption
{
  wireList: Array<GuitarWireType | null>;
  inputDuration?: TimeType;
  distancePerNote?: TimeType;
  velocity?: number;
}

export interface GuitarRhythmOption
{
  inputDuration: TimeType;
  distancePerNote?: TimeType;
  silenceInHalf?: boolean;
  velocity?: number;
  strong?: number;
}

type RhythmType = 'down' | 'up' | 'half-down1' | 'half-down1-3' | 'half-down1-a' |
'half-down2' | 'half-up1' |
'half-up2' | 'aDown' | 'bDown' | 'cDown';

const rhythmWireList: Record<RhythmType, GuitarWireType[]> = {
  down: [6, 5, 4, 3, 2, 1],
  aDown: [5, 4, 3, 2, 1],
  bDown: [4, 3, 2, 1],
  cDown: [5, 4, 3, 2],
  up: [1, 2, 3, 4, 5, 6],
  'half-down1-3': [6, 5, 4, 3],
  'half-down1-a': [5, 4, 3],
  'half-down1': [6, 5, 4],
  'half-down2': [3, 2, 1],
  'half-up1': [1, 2, 3],
  'half-up2': [4, 5, 6]
};

export class Guitar
{
  protected base: FretGuitar = new FretGuitar();
  protected achord: [GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType] = [0, 0, 0, 0, 0, 0];
  protected bar: GuitarFretType = 0;
  protected trackName = 'Guitar';
  constructor(trackName?: string, music?: Music)
  {
    if (music != null)
    {
      this.base.music = music;
    }

    if (trackName != null)
    {
      this.trackName = trackName;
    }

    this.base = new FretGuitar(this.trackName, music);
  }

  moveBar(fret?: GuitarFretType): void
  {
    if (fret == null)
    {
      this.bar = 0;
    }
    else
    {
      this.bar = fret;
    }
  }

  pic(achord: AchordType): void
  {
    this.achord = achord;
  }

  /**
   * play guitar wire
   *
   * @param {object} option parms for play guitar
   */
  play(option: GuitarPlayOption): void
  {
    if (option.wireList == null) { return; }
    this.base.play({
      wireList: option.wireList.map((wire) => wire != null ? { w: wire, f: this.getFret(wire) } : null),
      inputDuration: option.inputDuration,
      distancePerNote: option.distancePerNote,
      velocity: option.velocity
    });
  }

  down(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('down', option, delay);
  }

  up(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('up', option, delay);
  }

  halfDown_1(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('half-down1', option, delay);
  }

  halfDown_1_3(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('half-down1-3', option, delay);
  }

  halfDown_1_a(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('half-down1-a', option, delay);
  }

  halfDown_2(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('half-down2', option, delay);
  }

  halfUp_1(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('half-up1', option, delay);
  }

  halfUp_2(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('half-up2', option, delay);
  }

  aDown(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('aDown', option, delay);
  }

  bDown(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('bDown', option, delay);
  }

  cDown(option: GuitarRhythmOption, delay: boolean = true): void
  {
    this.playRhythm('cDown', option, delay);
  }

  syncope(numberNote: number = 1, option: GuitarRhythmOption, delay: boolean = true): void
  {
    if (option.inputDuration == null) { return; }
    // const wireList: GuitarWireType[] = [1, 1, 1, 1, 1, 1];
    let distancePerNote: TimeType | undefined = { type: 1, length: 0 };
    if (option.distancePerNote == null)
    {
      if (delay === true)
      {
        if (option.inputDuration.type != null)
        {
          distancePerNote.type = option.inputDuration.type + 5;
          distancePerNote.length = option.inputDuration.length;
        }
      }
    }
    else
    {
      distancePerNote = option.distancePerNote;
    }
    if (numberNote === 1)
    {
      this.base.playMultiNote({
        noteList: [
          'C#6'
        ],
        inputDuration: option.inputDuration,
        distancePerNote,
        velocity: option.velocity
      }, true);
    }
    else
    {
      this.base.playMultiNote({
        noteList: [
          'C#6', 'D#6'
        ],
        inputDuration: option.inputDuration,
        distancePerNote,
        velocity: option.velocity
      }, true);
    }
  }

  playRhythm(type: RhythmType, option: GuitarRhythmOption, delay: boolean = true): void
  {
    if (option.inputDuration == null) { return; }
    const wireList: GuitarWireType[] = rhythmWireList[type] ?? [6, 5, 4, 3, 2, 1];
    let distancePerNote: TimeType | undefined = { type: 1, length: 0 };
    if (option.distancePerNote == null)
    {
      if (delay === true)
      {
        if (option.inputDuration.type != null)
        {
          distancePerNote.type = option.inputDuration.type + 4 + (option.strong ?? 0);
          distancePerNote.length = option.inputDuration.length;
        }
      }
    }
    else
    {
      distancePerNote = option.distancePerNote;
    }

    this.base.playMulti({
      wireList: wireList.map((wire) => wire != null ? { w: wire, f: this.getFret(wire) } : null),
      inputDuration: option.inputDuration,
      distancePerNote,
      velocity: option.velocity
    }, true);

    if (option.silenceInHalf === true)
    {
      this.base.music.playSuccessive({
        instrument: this.trackName,
        noteList: [null, 'C#6'],
        inputDuration: option.inputDuration,
        velocity: 120
      });
    }
  }

  /**
   * play guitar wire in Successive time
   *
   * @param {object} option parms for play guitar
   */
  playSuccessive(option: GuitarPlayOption): void
  {
    if (option.wireList == null) { return; }
    this.base.playSuccessive({
      wireList: option.wireList.map((wire) => wire != null ? { w: wire, f: this.getFret(wire) } : null),
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
    option: GuitarPlayOption,
    sameEnd: boolean = false
  ): void
  {
    if (option.wireList == null) { return; }
    this.base.playMulti({
      wireList: option.wireList.map((wire) => wire != null ? { w: wire, f: this.getFret(wire) } : null),
      inputDuration: option.inputDuration,
      distancePerNote: option.distancePerNote,
      velocity: option.velocity
    }, sameEnd);
  }

  next(number?: number): void
  {
    this.base.next(number);
  }

  delay(duration: BaseTimeType): void
  {
    this.base.delay(duration);
  }

  protected getFret(wire: GuitarWireType): GuitarFretType
  {
    const arreyKey = wire - 1;
    const achord = [...this.achord].reverse();
    const fret = (this.bar as number) + (achord[arreyKey] as number);
    if (fret > 19 || fret < 0)
    {
      return 0;
    }
    else
    {
      return fret as GuitarFretType;
    }
  }
}
