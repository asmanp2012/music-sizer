import { pitchPyin } from "@libraz/libsonare";

export interface TrackNotes extends Record<string, unknown> {
  notes: Array<{ startTime: number; duration: number; freq: number }>;
  tempo: number | null
}


/**
 * Detects notes from audio samples using the PYIN algorithm.
 * pYIN: A fundamental frequency estimator for speech and music" (Mauch & Dixon, 2014)
 * @param { Float32Array } samples - The audio samples to analyze.
 * @param { number } sampleRate - The sample rate of the audio.
 * @param { number } threshold - The YIN threshold for pitch detection (default: 0.05).
 * @returns { TrackNotes } An object containing detected notes and estimated tempo.
 */
export function trackNotes(
  samples: Float32Array,
  sampleRate: number,
  threshold: number = 0.05,
): TrackNotes {
  const pyinResult = pitchPyin(
    samples,
    sampleRate,
    2048,
    512,
    80,
    1000,
    threshold,
  );

  const notes = [];
  let currentStartTime = null;
  let currentFreq = 0;

  for (let i = 0; i < pyinResult.f0.length; i++) {
    const time = (i * 512) / sampleRate;
    const freq = pyinResult.f0[i];
    const isVoiced = !isNaN(freq) && freq > 0;

    if (isVoiced && currentStartTime === null) {
      currentStartTime = time;
      currentFreq = freq;
    } else if (!isVoiced && currentStartTime !== null) {
      const duration = time - currentStartTime;
      if (duration > 0.05) {
        const noteNumber = 12 * Math.log2(currentFreq / 440) + 69;
        const octave = Math.floor(noteNumber / 12) - 1;
        const noteName = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'][Math.round(noteNumber) % 12];
        notes.push({
          startTime: currentStartTime,
          duration: duration,
          freq: currentFreq,
          octave,
          noteName
        });
      }
      currentStartTime = null;
    }
  }

  // محاسبه تمپو
  let tempo = null;
  if (notes.length >= 2) {
    let sumInterval = 0;
    for (let i = 1; i < notes.length; i++) {
      sumInterval += notes[i].startTime - notes[i - 1].startTime;
    }
    const avgInterval = sumInterval / (notes.length - 1);
    tempo = 60 / avgInterval;
  }

  return { notes, tempo };
}
