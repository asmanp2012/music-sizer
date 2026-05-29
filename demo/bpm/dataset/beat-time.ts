import { writeJsonFile } from '../lib/write-json.js';

const bpmList: Record<number, number> = {};
for (let i = 60; i <= 200; i++) { bpmList[i] = 60 / i; }
void writeJsonFile('beat-time.json', bpmList, true);
