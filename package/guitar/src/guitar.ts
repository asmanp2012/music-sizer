import { Music } from '@music-sizer/main';
import { BaseGuitar, GuitarWireType, GuitarFretType } from '@music-sizer/base-guitar';
import type { TimeType, BaseTimeType } from '@music-sizer/main';
import type { AchordType } from './achord-list.js';
export class Guitar
{
  protected base: BaseGuitar = new BaseGuitar();
  protected achord: [GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType, GuitarFretType] = [0, 0, 0, 0, 0, 0];
  protected bar: GuitarFretType = 0;
  protected trackName = 'Guitar';
  constructor(trackName?: string, music?: Music)
  {
    if (music != null)
    {
      this.base.music = music;
    }

    this.base = new BaseGuitar(trackName == null ? this.trackName : trackName, music);
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

  play(
    wire: GuitarWireType,
    inputDuration?: TimeType,
    velocity: number = 85
  ): void
  {
    if (wire == null) { return; }
    this.base.play(
      [wire, this.getFret(wire)],
      inputDuration,
      velocity
    );
  }

  playSuccessive(
    wireList: Array<GuitarWireType | null>,
    inputDuration?: TimeType,
    durationPerNote?: TimeType,
    velocity: number = 85
  ): void
  {
    this.base.playSuccessive(
      wireList.map((wire) => wire != null ? [wire, this.getFret(wire)] : null),
      inputDuration,
      durationPerNote,
      velocity
    );
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
