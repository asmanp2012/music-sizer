import * as Note from "tonal-note"
import { exportTrackListToMidi } from './midi-file/export-track-list-to-midi';
import { TrackList, TimeSignature } from './midi-file/type';

interface TimeNote {
  start: number;
  end: number;
}

export class Music{
	trackList: TrackList = {};   // Array<instrument or tracks>
  tempo: number = 120;         // beat per minuts
  tikPerBeat: number = 256;    // tik  per beat 
  timeSignature: TimeSignature | null = null;


  save(fileName: string){
    this.trackList["header"] = {
      trackTime: 0,
      lastNoteOff: 0,
      lastNoteOn: 0,
      data: [{
        meta: true,
        type: "timeSignature",
        deltaTime: 0,
        "numerator": this.timeSignature?.numerator ?? 4,
        "denominator": this.timeSignature?.denominator ?? 4,
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

	addInestroment(name: string) 
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

	private _play(time: number, duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): TimeNote
	{
    const timing = { start: time, end: time+duration };
    this.updateTime(inestroment, timing);

    if(velocity === 0){ return timing; }

    for (const keyNote of noteList) {
      const note = typeof keyNote === "string" ? Note.midi(keyNote): keyNote;
      if(note == null) { continue; }
      // console.log(time, 'noteOn');
      this.trackList[inestroment].data.push({
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
      this.trackList[inestroment].data.push({
        deltaTime: timing.end,
        channel: 0,
        type: "noteOff",
        noteNumber: note,
        velocity: velocity,
      });
    }

    return timing;
	}

  updateTime(inestroment: string, timing: TimeNote): void
  {
    const trackTime = this.trackList[inestroment].trackTime;
    const lastNoteOn = this.trackList[inestroment].lastNoteOn;
    if(
      trackTime < timing.end || 
      trackTime == null
    )
    {
      this.trackList[inestroment].trackTime = timing.end;
    }

    if(
      lastNoteOn < timing.start  || 
      lastNoteOn == null
    )
    {
      this.trackList[inestroment].lastNoteOn = timing.start;
      this.trackList[inestroment].lastNoteOff = timing.end;
    }
  }

  play(duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): void
  {
    const time = this.trackList[inestroment].trackTime ?? 0;
    duration = beatNumberToTik(duration,this.tikPerBeat);
    this._play(time,duration,inestroment,noteList, velocity);
    // console.log(this.trackList[inestroment]);
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

export function beatNumberToTik(beat: number, tikPerBeat: number): number
{
  if(Math.sign(beat) === -1) 
  { 
    const lengthFromNote = beat * -1;
    const lengthFromBeat = Math.pow(2, lengthFromNote);
    beat = tikPerBeat / lengthFromBeat;
  }
  else { beat = tikPerBeat * beat; }
  return beat;
}