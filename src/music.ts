import * as Note from "tonal-note"
import * as fs from 'fs';
import { MidiEvent, MidiData, writeMidi } from 'midi-file';
// import type { IMidiFile, TMidiEvent } from 'midi-json-parser-worker';

type trackType = { 
  barPerPart: number;
  lastNoteOn: number;
  lastNoteOff: number;
  data: Array<MidiEvent>;
};

interface playResult {
  noteOntime: number;
  noteOffTime: number;
}

export class Music{
  tempo: number = 120;     // beat per minuts
  tikPerBeat: number = 256;// tik  per beat 

	trackList: Record<string,trackType> = {};   // Array<instrument or tracks>
  trackTime: Record<string,number> = {};
	addInestroment(name: string) 
	{
		this.trackList[name].data = [{
        meta: true,
        text: name,
        type: "trackName",
        deltaTime: 0,
    }];
	}

	save(fileName: string): void
	{
		const midiFile: MidiData = {
      header: {
        format: 1,
        numTracks:  Object.keys(this.trackList).length,
        ticksPerBeat: this.tikPerBeat,
      },
      tracks: [],
    };

    for (const key in this.trackList) {
      let oldTime = 0;
      this.trackList[key].data =  this.trackList[key].data.sort(function (a, b) {
        return a.deltaTime - b.deltaTime;
      });
      const track = this.trackList[key].data.map((event) => {
        const baseTime = event.deltaTime
        event.deltaTime = baseTime - oldTime;
        // console.log(event.deltaTime, key, event.type);
        oldTime = baseTime;
        return event;
      });
      
      track.push({
        deltaTime: 0,
        type: "endOfTrack",
        "meta": true
      });
      midiFile.tracks.push(track);
    }
    const output = writeMidi(midiFile);
    const outputBuffer2 = Buffer.from(output);
    fs.writeFileSync(fileName, outputBuffer2);
    fs.writeFileSync(fileName+".json", JSON.stringify(midiFile));
	}

	private _play(time: number, duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): playResult
	{
    if(
      this.trackTime[inestroment] < time + duration || 
      this.trackTime[inestroment] == null
    )
    {
      this.trackTime[inestroment] = time + duration;
    }

    if(velocity === 0){
      return { noteOntime: time, noteOffTime: time+duration }
    }

    for (const keyNote of noteList) {
      const note = typeof keyNote === "string" ? Note.midi(keyNote): keyNote;
      if(note == null) { continue; }
      // console.log(time, 'noteOn');
      this.trackList[inestroment].data.push({
        deltaTime: time,
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
        deltaTime: time+duration,
        channel: 0,
        type: "noteOff",
        noteNumber: note,
        velocity: velocity,
      });
    }

    return { noteOntime: time, noteOffTime: time+duration }
	}

  playInTime(time: number, duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): playResult
  {
    time = beatNumberToTik(time,this.tikPerBeat);
    duration = beatNumberToTik(duration,this.tikPerBeat);
    return this._play(time,duration,inestroment,noteList, velocity);
  }

  play(duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): playResult
  {
    console.log(this.trackTime[inestroment]);
    const time = this.trackTime[inestroment] ?? 0;
    duration = beatNumberToTik(duration,this.tikPerBeat);
    return this._play(time,duration,inestroment,noteList, velocity);
  }

  playOnTick(time: number, duration: number, inestroment: string, noteList: Array<number | string>, velocity: number = 85 ): playResult
  {
    duration = beatNumberToTik(duration,this.tikPerBeat);
    return this._play(time,duration,inestroment,noteList, velocity);
  }
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