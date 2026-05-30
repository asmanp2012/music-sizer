// meter-detector.ts

export interface TimeSignatureResult {
  numerator: number;
  denominator: number;
  confidence: number;
  source: "note_based" | "beat_tracking";
}

/**
 * Detects time signature from beat times using Autocorrelation method
 * Based on: "Tempo and Metrical Analysis by Tracking Multiple Metrical Levels
 *           using Autocorrelation" (Lartillot & Grandjean, MDPI 2021)
 *
 * @param {number[]} beatTimes - Array of beat timestamps in seconds
 * @returns {TimeSignatureResult} Time signature result with numerator, denominator, and confidence
 */
export function detectTimeSignature(beatTimes: number[]): TimeSignatureResult {
  // Fallback for insufficient data
  if (beatTimes.length < 12) {
    return { numerator: 4, denominator: 4, confidence: 0.3, source: "note_based" };
  }

  // Step 1: Calculate Inter-Onset Intervals (IOIs)
  const intervals: number[] = [];
  for (let i = 1; i < beatTimes.length; i++) {
    intervals.push(beatTimes[i] - beatTimes[i - 1]);
  }

  // ONLY common time signatures (remove 5,7,8,9,10,11,12,16)
  const commonPatterns = [2, 3, 4, 6];
  const scores: { pattern: number; score: number }[] = [];

  for (const pattern of commonPatterns) {
    if (pattern * 2 > intervals.length) continue;

    let matches = 0;
    let comparisons = 0;

    for (let i = pattern; i < intervals.length; i++) {
      // Compare interval with the one 'pattern' steps before
      const ratio = intervals[i] / intervals[i - pattern];
      // If ratio is close to 1, pattern repeats
      if (ratio > 0.85 && ratio < 1.15) {
        matches++;
      }
      comparisons++;
    }

    const score = comparisons > 0 ? matches / comparisons : 0;
    scores.push({ pattern, score });
  }

  // Find best pattern
  let bestPattern = 4;
  let bestScore = 0;

  for (const s of scores) {
    if (s.score > bestScore) {
      bestScore = s.score;
      bestPattern = s.pattern;
    }
  }

  // Determine denominator
    let denominator = 4;
    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    
    // 6/8 detection
    if (bestPattern === 6 && bestScore > 0.5) {
        // Check for triplet feel (shorter intervals)
        let shortCount = 0;
        for (let i = 0; i < intervals.length; i++) {
            if (intervals[i] < avgInterval * 0.7) {
                shortCount++;
            }
        }
        if (shortCount > intervals.length * 0.3) {
            denominator = 8;
        }
    }
    
    // 3/8 detection (very fast 3-beat)
    if (bestPattern === 3 && avgInterval < 0.3) {
        denominator = 8;
    }
    
    // 2/2 detection (very slow 2-beat)
    if (bestPattern === 2 && avgInterval > 0.6) {
        denominator = 2;
    }

    // Confidence based on score and data quality
    const confidence = Math.min(0.9, bestScore * (1 - Math.exp(-beatTimes.length / 20)));

    return {
        numerator: bestPattern,
        denominator: denominator,
        confidence: confidence,
        source: "note_based"
    };
}

/**
 * Helper function to calculate median of an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Median value
 */
function median(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}
