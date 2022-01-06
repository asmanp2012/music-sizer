import { MidiEvent } from 'midi-file';

export type TrackType = {
  lastStart: number;
  lastEnd: number;
  delay: number;
  beat: number;
  trackTime: number;
  data: Array<MidiEvent>;
};

export type TrackList = Record<string,TrackType>;

export interface TimeSignature {
  numerator: number; //  Number of beats per measure
  denominator: number; // Type of note which equals 1 beat
}