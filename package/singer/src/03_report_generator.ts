import path from 'path';
import { init, analyze } from '@libraz/libsonare';
import { loadAudioFile } from './00_load-audio.ts';
import { trackNotes } from './01_note-detector.ts';
import { detectTimeSignature } from './02_meter-detector.ts';
import type { CliOptions } from './lib/parse-arges.ts';
import type { AnalysisResult } from '@libraz/libsonare';
import type { TrackNotes } from './01_note-detector.ts';
import type { TimeSignatureResult } from './02_meter-detector.ts'
import type { ResultFunc } from './lib/type.ts';

export interface ReportType extends ResultFunc {
  trackInfo: AnalysisResult;
  audioFilePath: string;
  trackNotes: TrackNotes;
  timeSignature: TimeSignatureResult;
  preferredTempoSource: "note_based";
}

interface TimeSignature {
    numerator: number;
    denominator: number;
    confidence: number;
}

/**
 * Generates a report based on the analysis of the audio file.
 * @param { CliOptions } options - The command-line options.
 * @returns { Promise<ReportType> } A promise that resolves when the report is generated.
 */
export async function reportGenerator(options: CliOptions): Promise<ReportType> {
  const filePath = path.resolve(process.cwd(), options.inputPath);
  const result: Partial<ReportType> = {
    outputFile: path.basename(filePath, path.extname(filePath)) + '_report'
  };
  if (!filePath) {
    console.log('Usage: bun index.ts <path/to/audio.mp3>');
    process.exit(1);
  }

  const audioFile = await loadAudioFile(filePath);

  await init();
  result.audioFilePath = filePath;
  result.trackInfo = analyze(audioFile.samples, audioFile.sampleRate);
  result.trackInfo.sections = []; // Clear sections to save memory, as they are not needed for the report.
  result.trackInfo.timeSignature = {
    ...result.trackInfo.timeSignature,
     source: "beat_tracking"
  } as unknown as TimeSignature;

  if (options.verbose) {
    console.log('\n=== Analysis Result ===');
    console.log(`🎵 Key: ${result.trackInfo.key.name}`);
    console.log(`🥁 BPM (micro): ${result.trackInfo.bpm} (Confidence: ${(result.trackInfo.bpmConfidence * 100).toFixed(1)}%)`);
    console.log(`📌 Beats found: ${result.trackInfo.beatTimes.length}`);
  }

  if (result.trackInfo.beatTimes.length < 2) {
    console.log("\n=== Beat Detection Warning ===");
    console.log('⚠️ Not enough beats detected. Try singing with a metronome for better results.');
    console.log('💡 Tip: Search "metronome 117 bpm" on YouTube and sing along, then re-record.');
  }

  
  result.trackNotes = trackNotes(audioFile.samples, audioFile.sampleRate);
  const beatTimesArray = Array.from<number>(result.trackInfo.beatTimes);
  result.timeSignature = detectTimeSignature(beatTimesArray);
  result.preferredTempoSource = "note_based";
  if(options.verbose) {
    console.log('\n=== Production Recommendation ===');
    console.log(`🎵 Key: ${result.trackInfo.key.name}`);
    console.log(`🥁 Main Tempo (based on notes): ${typeof result.trackNotes.tempo === 'number' ? Math.round(result.trackNotes.tempo) : 'N/A'} BPM`);
    console.log(`🎚️ Time Signature (based on autocorrelation): ${result.timeSignature.numerator}/${result.timeSignature.denominator} (${(result.timeSignature.confidence * 100).toFixed(0)}% confidence)`);
  }
  
  return result as ReportType;
}
