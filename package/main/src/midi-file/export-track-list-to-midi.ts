import * as fs from 'fs';
import { dirname } from 'path';
import { MidiData, writeMidi } from 'midi-file';
import { TrackList } from './type';

/**
 *
 */
export function exportTrackListToMidi(
  fileName: string,
  trackList: TrackList,
  tikPerBeat: number,
): void
{
  const midiFile: MidiData = {
    header: {
      format: 1,
      numTracks: Object.keys(trackList).length,
      ticksPerBeat: tikPerBeat,
    },
    tracks: [trackList.header.data],
  };

  for (const key in trackList)
  {
    if (key === 'header') { continue; }
    let oldTime = 0;
    trackList[key].data = trackList[key].data.sort(function(a, b)
    {
      return a.deltaTime - b.deltaTime;
    });
    const track = trackList[key].data.map((event) =>
    {
      const baseTime = event.deltaTime;
      event.deltaTime = baseTime - oldTime;
      // console.log(event.deltaTime, key, event.type);
      oldTime = baseTime;
      return event;
    });

    track.push({
      deltaTime: 0,
      type: 'endOfTrack',
      meta: true
    });
    midiFile.tracks.push(track);
  }
  const output = writeMidi(midiFile);
  const outputBuffer2 = Buffer.from(output);
  const dirName = dirname(fileName);
  if (!fs.existsSync(dirName))
  {
    fs.mkdirSync(dirName, { recursive: true });
  }
  fs.writeFileSync(fileName, outputBuffer2);
  fs.writeFileSync(fileName + '.json', JSON.stringify(midiFile));
}
