import * as fs from 'fs';
import * as midiManager from 'midi-file';


const name = 'soltan-ghalbha.mid';
const exportName = 'export-soltan-ghalbha.mid'
var data = fs.readFileSync(name);


// give back json object
const content = midiManager.parseMidi(data);
fs.writeFileSync(name+'.json', JSON.stringify(content));
const output = midiManager.writeMidi(content);
const outputBuffer2 = Buffer.from(output);
fs.writeFileSync(exportName, outputBuffer2)

