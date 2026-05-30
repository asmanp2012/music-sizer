export interface CliOptions {
  command: 'help' | 'version' | 'report' | 'bml';
  inputPath: string;
  outputPath?: string;
  verbose: boolean;
  threshold: number;
  format: 'json' | 'console' | 'md' | 'both';
}

/**
 * Parses command-line arguments and returns an object with the options.
 */
export function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  
  const options: CliOptions = {
    command: 'report',
    inputPath: '',
    outputPath: '',
    verbose: false,
    threshold: 0.05,
    format: 'both'
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    // Help command
    if (arg === '--help' || arg === '-h') {
      options.command = 'help';
      return options;
    }
    
    // Version command
    if (arg === '--version' || arg === '-v') {
      options.command = 'version';
      return options;
    }
    
    // Commands
    if (arg === 'report' || arg === '--r') {
      options.command = 'report';
      continue;
    }

    if (arg === '--bml' || arg === '-b') {
      options.command = 'bml';
      return options;
    }

    // Options
    if (arg === '--input' || arg === '-i') {
      options.inputPath = args[++i];
      continue;
    }
    
    if (arg === '--output' || arg === '-o') {
      options.outputPath = args[++i];
      continue;
    }
    
    if (arg === '--verbose' || arg === '-ver' || arg === '--ver') {
      options.verbose = true;
      continue;
    }
    
    if (arg === '--threshold' || arg === '-t') {
      options.threshold = parseFloat(args[++i]) || 0.05;
      continue;
    }
    
    if (arg === '--format' || arg === '-f') {
      const format = args[++i];
      if(format === "console" || format === "both")
      {
        options.verbose = true;
      }
      if (format === 'json' || format === 'console' || format === 'both') {
        options.format = format;
      }
      continue;
    }
    
    // If no flag, assume it's input path
    if (!options.inputPath && !arg.startsWith('-')) {
      options.inputPath = arg;
    }
  }
  
  if(options.inputPath != '' && options.inputPath != undefined && options.outputPath == '') {
    options.outputPath = options.inputPath.replace(/\.[^/.]+$/, '');
  }

  return options;
}