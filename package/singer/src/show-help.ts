export function showHelp(): void {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    Music Sizer - CLI Help                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  USAGE:                                                      ║
║    bun index.ts [command] [options] <input-file>            ║
║                                                              ║
║  COMMANDS:                                                   ║
║    analyze, a     Analyze audio file (default)              ║
║    export, e      Export analysis to JSON file              ║
║    help, -h       Show this help message                    ║
║    version, -v    Show version information                  ║
║                                                              ║
║  OPTIONS:                                                    ║
║    -i, --input    <path>    Input audio file                ║
║    -o, --output   <path>    Output file path                ║
║    -t, --threshold <num>    YIN threshold (default: 0.05)   ║
║    -f, --format   <type>    Output format: json, console,   ║
║                             both (default: both)            ║
║    --verbose                Show detailed logs              ║
║    -h, --help               Show this help                  ║
║    -v, --version            Show version                    ║
║                                                              ║
║  EXAMPLES:                                                   ║
║    bun index.ts ./song.mp3                                  ║
║    bun index.ts analyze -i ./song.mp3 -f json               ║
║    bun index.ts export -i ./song.mp3 -o ./analysis.json     ║
║    bun index.ts -t 0.03 ./song.mp3 --verbose                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
  `);
}