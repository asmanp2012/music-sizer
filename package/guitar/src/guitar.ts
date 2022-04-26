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

    this.base = new FretGuitar(trackName == null ? this.trackName : trackName, music);
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
    const fret = (this.bar as number) + (this.achord[arreyKey] as number);
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
