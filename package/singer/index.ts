import path from 'path';
import { init, analyze } from '@libraz/libsonare';
import { loadAudioFile } from './src/00_load-audio.ts';
import { detectNotes } from './src/01_note-detector.ts';
import { detectTimeSignature } from './src/02_meter-detector.ts';

const mainPath = process.cwd();

const inputFilePath = process.argv[2];
if (!inputFilePath) {
  console.log('Usage: bun index.ts <path/to/audio.mp3>');
  process.exit(1);
}
const filePath = path.resolve(mainPath, inputFilePath);

const audioFile = await loadAudioFile(filePath);

await init();

const trackInfo = analyze(audioFile.samples, audioFile.sampleRate);

console.log('\n=== Analysis Result for Music Production ===');
console.log(`🎵 Key: ${trackInfo.key.name} (Use this for your chords)`);
console.log(`🥁 BPM (micro): ${trackInfo.bpm} (Confidence: ${(trackInfo.bpmConfidence * 100).toFixed(1)}%)`);
console.log(`📌 Beats found: ${trackInfo.beatTimes.length}`);

if (trackInfo.beatTimes.length < 2) {
  console.log("\n=== Beat Detection Warning ===");
  console.log('⚠️ Not enough beats detected. Try singing with a metronome for better results.');
  console.log('💡 Tip: Search "metronome 117 bpm" on YouTube and sing along, then re-record.');
}

const { notes, tempo } = detectNotes(audioFile.samples, audioFile.sampleRate);

const beatTimesArray = Array.from(trackInfo.beatTimes);
const timeSignature = detectTimeSignature(beatTimesArray);

console.log('\n=== Production Recommendation ===');
console.log(`🎵 Key: ${trackInfo.key.name}`);
console.log(`🥁 Main Tempo (based on notes): ${typeof tempo === 'number' ? Math.round(tempo) : 'N/A'} BPM`);
console.log(`🎚️ Time Signature (based on autocorrelation): ${timeSignature.numerator}/${timeSignature.denominator} (${(timeSignature.confidence * 100).toFixed(0)}% confidence)`);
console.log(`\n💡 Set your DAW to ${typeof tempo === 'number' ? Math.round(tempo) : 'N/A'} BPM, ${timeSignature.numerator}/${timeSignature.denominator} in ${trackInfo.key.name}`);

if (notes.length > 0) {
  console.log('\n=== Detected Notes ===');
  notes.slice(0, 15).forEach((note, i) => {
    console.log(`Note ${i+1}: ${note.noteName}${note.octave} | Start: ${note.startTime.toFixed(2)}s | Duration: ${note.duration.toFixed(2)}s`);
  });
  if (notes.length > 15) { console.log(`... and ${notes.length - 15} more notes`) };
}