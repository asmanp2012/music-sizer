import * as Note from "tonal-note"
import { exportTrackListToMidi } from './midi-file/export-track-list-to-midi';
import { TrackList, TimeSignature } from './midi-file/type';

interface TimeNote {
  start: number;
  end: number;
}

interface BaseTimeType {
  type: number;
  length: number;
}

interface OptionalDurationType {
  type?: number;
  length?: number;
}

type TimeType = BaseTimeType | OptionalDurationType;


const defultDuration: BaseTimeType = {
  type: 3,
  length: 1
}

const defultAfterTime: BaseTimeType = {
  type: 0,
  length: 0
}

export class Music{
	trackList: TrackList = {};   // Array<instrument or tracks>
  tempo: number = 120;         // beat per minuts
  tikPerBeat: number = 256;    // tik  per beat 
  timeSignature: TimeSignature = {
    numerator: 4,
    denominator: 4
  };


  save(fileName: string){
    this.trackList["header"] = {
      trackTime: 0,
      lastNoteOff: 0,
      lastNoteOn: 0,
      data: [{
        meta: true,
        type: "timeSignature",
        deltaTime: 0,
        "numerator": this.timeSignature.numerator,
        "denominator": this.timeSignature.denominator,
        "metronome": 24,
        "thirtyseconds": 8
      },
      {
        "deltaTime": 0,
        "meta": true,
        "type": "endOfTrack"
      }]
    }
    exportTrackListToMidi(fileName,this.trackList, this.tikPerBeat);
  }

	addInstrument(name: string) 
	{
		this.trackList[name] = {
      trackTime: 0,
      lastNoteOff: 0,
      lastNoteOn: 0,
      data: [{
        meta: true,
        text: name,
        type: "trackName",
        deltaTime: 0,
      }]
    };
	}

	private _play(time: number, duration: number, instrument: string, noteList: Array<number | string>, velocity: number = 85 ): TimeNote
	{
    const timing = { start: time, end: time+duration };
    // const hiddenNoteOf = { start: time, end: time };
    this.updateTime(instrument, timing);
    
    if(velocity === 0){ return timing; }

    for (const keyNote of noteList) {
      const note = typeof keyNote === "string" ? Note.midi(keyNote): keyNote;
      if(note == null) { continue; }
      // console.log(time, 'noteOn');
      this.trackList[instrument].data.push({
        deltaTime: timing.start,
        channel: 0,
        type: "noteOn",
        noteNumber: note,
        velocity: velocity,
      });
    }

    for (const keyNote of noteList) {
      const note = typeof keyNote === "string" ? Note.midi(keyNote): keyNote;
      if(note == null) { continue; }
      // console.log(time+duration, 'noteOff');
      this.trackList[instrument].data.push({
        deltaTime: timing.end,
        channel: 0,
        type: "noteOff",
        noteNumber: note,
        velocity: velocity,
      });
    }

    return timing;
	}

  updateTime(instrument: string, timing: TimeNote): void
  {
    const trackTime = this.trackList[instrument].trackTime;
    const lastNoteOn = this.trackList[instrument].lastNoteOn;
    if(
      trackTime < timing.end || 
      trackTime == null
    )
    {
      this.trackList[instrument].trackTime = timing.end;
    }

    if(
      lastNoteOn < timing.start  || 
      lastNoteOn == null
    )
    {
      this.trackList[instrument].lastNoteOn = timing.start;
      this.trackList[instrument].lastNoteOff = timing.end;
    }
  }

  play(instrument: string, noteList: Array<number | string>, inputDuration?: TimeType, inputAfterNoteOn?: TimeType,  velocity: number = 85 ): void
  {
    const durationOption: BaseTimeType = {
      ...defultDuration,
      ...inputDuration
    };

    const timeOption: BaseTimeType = {
      ...defultAfterTime,
      ...inputAfterNoteOn
    }

    const after = this.noteNumberToTik(timeOption.type) * timeOption.length;
    const time = (this.trackList[instrument].lastNoteOn ?? 0) + after;
    const duration = this.noteNumberToTik(durationOption.type);
    this._play(time,duration * durationOption.length,instrument,noteList, velocity);
  }

  noteNumberToTik(typeDuration: number): number
  {
    if(typeDuration === 0) { return 0; }
    const wholeNote = this.tikPerBeat * this.timeSignature.denominator;
    const duration = wholeNote / Math.pow(2, typeDuration-1); 
    return duration;
  }
  // playInTime(time: number, duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): TimeNote
  // {
  //   time = beatNumberToTik(time,this.tikPerBeat);
  //   duration = beatNumberToTik(duration,this.tikPerBeat);
  //   return this._play(time,duration,inestroment,noteList, velocity);
  // }

  // playOnTick(time: number, duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): TimeNote
  // {
  //   duration = beatNumberToTik(duration,this.tikPerBeat);
  //   return this._play(time,duration,inestroment,noteList, velocity);
  // }
}