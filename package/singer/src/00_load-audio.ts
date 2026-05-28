// audioUtils.ts
import { AudioContext } from 'web-audio-api';
import { readFileSync } from 'fs';
import path from 'path';

/**
 * Loads an audio file and decodes it into a format suitable for processing.
 * @param { string } filePath - The path to the audio file.
 * @returns { Promise<{ samples: Float32Array; sampleRate: number; duration: number }> } A promise resolving to the decoded audio data.  
 */
export async function loadAudioFile(filePath: string) {
    const absolutePath = path.resolve(process.cwd(), filePath);
    console.log(`Loading: ${absolutePath}`);
    
    const fileBuffer = readFileSync(absolutePath);
    const audioCtx = new AudioContext();
    const decoded = await new Promise((resolve, reject) => {
        audioCtx.decodeAudioData(fileBuffer, resolve, reject);
    });
    
    return {
        samples: decoded.getChannelData(0),
        sampleRate: decoded.sampleRate,
        duration: decoded.length / decoded.sampleRate
    };
}
  
/**
 * Converts a time in seconds to the corresponding frame index based on the sample rate and hop length.
 * @param { number } time - The time in seconds to convert.
 * @param { number } sampleRate - The sample rate of the audio.
 * @param { number } hopLength - The hop length (interval between frames).
 * @returns { number } The corresponding frame index.
 */
export function timeToFrames(time: number, sampleRate: number, hopLength: number = 512) {
    return Math.floor(time * sampleRate / hopLength);
}

/**
 * Converts a frame index to the corresponding time in seconds based on the sample rate and hop length.
 * @param { number } frame - The frame index to convert.
 * @param { number } sampleRate - The sample rate of the audio.
 * @param { number } hopLength - The hop length (interval between frames).
 * @returns { number } The corresponding time in seconds.
 */
export function framesToTime(frame: number, sampleRate: number, hopLength: number = 512) {
    return frame * hopLength / sampleRate;
}