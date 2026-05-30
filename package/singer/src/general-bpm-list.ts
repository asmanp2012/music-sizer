import path from 'path';
import type { CliOptions } from "./lib/parse-arges";
import type { ResultFunc } from "./lib/type";

interface BpmInfo extends Record<string, unknown> {
  beatsPerSecond: number;
  distance: number;
  isRegular: boolean;
}

export interface ReportType extends ResultFunc {
  bpmList: Record<number, BpmInfo>;
}

/**
 * Checks the regularity of BPM values and generates a report.
 * @param { CliOptions } options - The command-line options.
 * @returns { ReportType } A promise that resolves when the report is generated.
 */
export function checkBpm(options: CliOptions): ReportType {
  const result: ReportType = {
    bpmList: {}
  };
  if(
    options.inputPath !== '' &&
    options.inputPath !== undefined &&
    Number(options.inputPath) &&
    isNaN(Number(options.inputPath)) === false
  ) {
    const bpm = Number(options.inputPath);
    const bpmValue = getBpmInfo(bpm);
    if(bpmValue.isRegular)
    {
      console.log(`Your Bpm ${options.inputPath} is regular with ${bpmValue.distance} digits after decimal point (${bpmValue.beatsPerSecond} beats/sec)`);
    }
    else
    {
      console.log(`Your Bpm ${options.inputPath} is not regular with ${bpmValue.distance} digits after decimal point (${bpmValue.beatsPerSecond} beats/sec)`);
    }
    result.bpmList[bpm] = bpmValue;
    return result as ReportType;
  }

  for (let bpm = 60; bpm <= 200; bpm++) {
    const bpmValue = getBpmInfo(bpm);
    result.bpmList[bpm] = bpmValue;
  }

  if (options.verbose) {
    console.log('\n=== BPM most regular list ===\n');
    for (const bpmKey in result.bpmList) {
      const data = result.bpmList[Number(bpmKey)];
      if(data.isRegular) {
        console.log(`BPM ${bpmKey}: ${data.beatsPerSecond} beats/sec is regular`);
      }
    }
  }

  return result;
}

/**
 * Get BPM classification
 * @param { number } bpm - BPM number
 */
export function getBpmInfo(bpm: number) {
 const beatsPerSecond = 60 / bpm;
  const decimalStr = beatsPerSecond.toString().split('.')[1] ?? "";
  
  return {
    beatsPerSecond,
    distance: decimalStr.length,
    isRegular: decimalStr.length <= 5
  };
}