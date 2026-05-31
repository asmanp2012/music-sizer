#!/usr/bin/env bun

import { writeFileSync } from 'fs';
import { parseArgs } from './src/lib/parse-arges.ts';
import { showHelp } from './src/show-help.ts';
import { showVersion } from './src/show-version.ts';
import { reportGenerator } from './src/03_report_generator.ts';
import { checkBpm } from './src/general-bpm-list.ts';
import type { ResultFunc } from './src/lib/type.ts';

const options = parseArgs();
let result: ResultFunc | null = null;


if(options.command === 'help') {
  showHelp();
  process.exit(0);
}

if(options.command === 'version') {
  showVersion();
  process.exit(0);
}

if(options.command === 'report') {
  result = await reportGenerator(options);
}

if(options.command === 'bml') {
  result = checkBpm(options);
}

if(!options.command) {
  console.error('Error: No command provided. Use --help for usage information.');
  process.exit(1);
}

if(result) {
  if(options.format === 'json' || options.format === 'both') {
    console.log(result.outputFile, options.outputPath);
    if(result.outputFile && options.outputPath && options.outputPath !== '')
    {
      const outputPath = options.outputPath + result.outputFile + '.json';
      writeFileSync(outputPath, JSON.stringify(result, null, 2));
      console.log(`📄 JSON saved to: ${outputPath}`);
    }
    else
    {
      // console.log(result);
    }
  }
  
  if(options.format === 'md') {
    // Implement markdown formatting logic here
    console.log('Markdown format is not yet implemented.');
  }
}
