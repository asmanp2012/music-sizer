console.log('\n=== BPM با کمترین اشعار (منظم‌ترین) ===\n');

const bpmListWithLowDistance: Record<number, { beatsPerSecond: number, distance: number }> = [];
const bpmListWithHighDistance: Record<number, { beatsPerSecond: number, distance: number }> = [];
for (let bpm = 60; bpm <= 200; bpm++) {
  const beatsPerSecond = 60 / bpm;
  const decimalStr = beatsPerSecond.toString().split('.')[1] ?? "";
  
  const bpmValue = {
    beatsPerSecond,
    distance: decimalStr.length
  }
  if(bpmValue.distance <= 5)
  {
    bpmListWithLowDistance[bpm] = bpmValue;
  }
  else
  {
    bpmListWithHighDistance[bpm] = bpmValue;
  }
}

const lowBpmKeyList = Object.keys(bpmListWithLowDistance);
// const highBpmKeyList = Object.keys(bpmListWithHighDistance);

for (const bpmKey of lowBpmKeyList) {
  const data = bpmListWithLowDistance[Number(bpmKey)];
  console.log(`BPM ${bpmKey}: ${data.beatsPerSecond} beats/sec (${data.distance} digits)`);
}

// for (const bpmKey of highBpmKeyList) {
//   const data = bpmListWithHighDistance[Number(bpmKey)];
//   console.log(`BPM ${bpmKey}: ${data.beatsPerSecond} beats/sec (${data.distance} digits)`);
// }

