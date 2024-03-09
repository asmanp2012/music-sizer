import Note from '@tonaljs/note';
import { exportTrackListToMidi } from './midi-file/export-track-list-to-midi.js';
import { TrackList, TimeSignature } from './midi-file/type.js';

type NoteNameType = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';
type NoteExtendType = '#' | 'b' | '';
type NoteScaleType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '';
export type NoteType = `${NoteNameType}${NoteExtendType}${NoteScaleType}`;

interface TimeNote
{
  start: number;
  end: number;
}

export interface BaseTimeType
{
  type: number;
  length: number;
}

interface OptionalDurationType
{
  type?: number;
  length?: number;
}

export type TimeType = BaseTimeType | OptionalDurationType;

interface PlayOptionType
{
  instrument: string;
  noteList?: Array<number | NoteType | null>;
  inputDuration?: TimeType;
  distancePerNote?: TimeType;
  velocity?: number;
}

export class Music
{
  trackList: TrackList = {}; // Array<instrument or tracks>
  tempo: number = 120; // beat per minuts
  tikPerBeat: number = 2520; // tik  per beat
  timeSignature: TimeSignature = {
    numerator: 4,
    denominator: 4
  };

  defaultOption = {
    velocity: 85,
    inputDuration: {
      type: 0,
      length: 1
    }
  };

  save(fileName: string): void
  {
    this.trackList.header = {
      trackTime: 0,
      lastEnd: 0,
      lastStart: 0,
      delay: 0,
      beat: 0,
      data: [{
        meta: true,
        type: 'timeSignature',
        deltaTime: 0,
        numerator: this.timeSignature.numerator,
        denominator: this.timeSignature.denominator,
        metronome: 24,
        thirtyseconds: 8
      },
      {
        deltaTime: 0,
        meta: true,
        type: 'setTempo',
        microsecondsPerBeat: 60000000 / this.tempo
      },
      {
        deltaTime: 0,
        meta: true,
        type: 'endOfTrack'
      }]
    };
    exportTrackListToMidi(fileName, this.trackList, this.tikPerBeat);
  }

  addInstrument(name: string): void
  {
    this.trackList[name] = {
      trackTime: 0,
      lastEnd: 0,
      lastStart: 0,
      delay: 0,
      beat: 0,
      data: [{
        meta: true,
        text: name,
        type: 'trackName',
        deltaTime: 0
      }]
    };
  }

  private _play(
    time: number,
    duration: number,
    instrument: string,
    noteList: Array<number | NoteType | null>,
    velocity: number = this.defaultOption.velocity,
    optionTime: {
      updateTime: boolean;
      endAppendToTime: boolean;
    } = { updateTime: true, endAppendToTime: true }
  ): TimeNote
  {
    const timing = {
      start: time,
      end: (optionTime.endAppendToTime !== false ? time : 0) + duration
    };
    if (optionTime.updateTime !== false)
    {
      this.updateTime(instrument, timing);
    }
    if (velocity === 0) { return timing; }

    for (const keyNote of noteList)
    {
      const note = typeof keyNote === 'string' ? Note.midi(keyNote) : keyNote;
      if (note == null) { continue; }
      // console.log(time, 'noteOn');
      this.trackList[instrument].data.push({
        deltaTime: timing.start,
        channel: 0,
        type: 'noteOn',
        noteNumber: note,
        velocity
      });
    }

    for (const keyNote of noteList)
    {
      const note = typeof keyNote === 'string' ? Note.midi(keyNote) : keyNote;
      if (note == null) { continue; }
      // console.log(time+duration, 'noteOff');
      this.trackList[instrument].data.push({
        deltaTime: timing.end,
        channel: 0,
        type: 'noteOff',
        noteNumber: note,
        velocity
      });
    }

    return timing;
  }

  updateTime(
    instrument: string,
    timing: TimeNote
  ): void
  {
    const trackTime = this.trackList[instrument].trackTime;
    const lastNoteOn = this.trackList[instrument].lastStart;
    if (
      trackTime < timing.end ||
      trackTime == null
    )
    {
      this.trackList[instrument].trackTime = timing.end;
      this.trackList[instrument].lastEnd = timing.end;
    }

    if (
      lastNoteOn < timing.start ||
      lastNoteOn == null
    )
    {
      this.trackList[instrument].lastStart = timing.start;
    }
  }

  /**
   * play multi note with the same duration
   *
   * @param {object} option params as a object
   */
  play(option: PlayOptionType): void
  {
    if (option.instrument == null) { return; }
    if (option.noteList == null) { return; }

    const durationOption: BaseTimeType = {
      ...this.defaultOption.inputDuration,
      ...option.inputDuration
    };

    const time = (this.trackList[option.instrument].beat * this.tikPerBeat) + this.trackList[option.instrument].delay;
    const duration = this.noteNumberToTik(durationOption.type) * durationOption.length;
    this._play(
      time,
      duration,
      option.instrument,
      option.noteList,
      option.velocity
    );
  }

  delay(
    instrument: string,
    inputDuration: BaseTimeType
  ): void
  {
    const duration = this.noteNumberToTik(inputDuration.type);
    this.trackList[instrument].delay = duration * inputDuration.length;
  }

  /**
   * play multi note Continuous
   *
   * @param {object} option params as a object
   */
  playSuccessive(
    option: PlayOptionType
  ): void
  {
    if (option.instrument == null) { return; }
    if (option.noteList == null) { return; }
    if (option.velocity == null) { option.velocity = this.defaultOption.velocity; }
    const durationOption: BaseTimeType = {
      ...this.defaultOption.inputDuration,
      ...option.inputDuration
    };

    const duration = this.noteNumberToTik(durationOption.type) * durationOption.length;
    const durationTime = duration / option.noteList.length;
    let time = (this.trackList[option.instrument].beat * this.tikPerBeat) + this.trackList[option.instrument].delay;
    for (const note of option.noteList)
    {
      if (note != null)
      {
        this._play(
          time,
          (option.distancePerNote != null) ? this.noteNumberToTik(durationOption.type) : durationTime,
          option.instrument, [note],
          option.velocity
        );
      }
      time += durationTime;
    }
  }

  /**
   * play multi note with difrent start but same end
   *
   * @param {object} option params as a object
   */
  playMulti(
    option: PlayOptionType,
    sameEnd: boolean = false
  ): void
  {
    if (option.instrument == null) { return; }
    if (option.noteList == null) { return; }
    if (option.velocity == null) { option.velocity = this.defaultOption.velocity; }

    const durationOption: BaseTimeType = {
      ...this.defaultOption.inputDuration,
      ...option.inputDuration
    };
    const duration = this.noteNumberToTik(durationOption.type) * durationOption.length;
    let durationTime = duration / option.noteList.length;

    if (option.distancePerNote != null)
    {
      const distanceTime = this.noteNumberToTik(option.distancePerNote.type as number) * (option.distancePerNote.length as number);
      durationTime = distanceTime;
    }
    let time = (this.trackList[option.instrument].beat * this.tikPerBeat) + this.trackList[option.instrument].delay;
    let endTime = duration;
    for (const note of option.noteList)
    {
      if (note != null)
      {
        this._play(
          time,
          endTime,
          option.instrument,
          [note],
          option.velocity
        );
      }
      time += durationTime;
      if (sameEnd === true)
      {
        endTime -= durationTime;
      }
    }
  }

  next(instrument: string, number: number = 1): void
  {
    this.trackList[instrument].delay = 0;
    this.trackList[instrument].beat = this.trackList[instrument].beat + number;
  }

  noteNumberToTik(typeDuration: number): number
  {
    if (typeDuration == null) { return 0; }
    if (typeDuration === 0) { return this.tikPerBeat; }
    const wholeNote = this.tikPerBeat * this.timeSignature.denominator;
    const duration = wholeNote / Math.pow(2, typeDuration - 1);
    return Math.floor(duration);
  }
}
