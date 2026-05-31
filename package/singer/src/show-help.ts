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
║    report, --r    Generate analysis report                  ║
║    bml, -b        Analyze BPM regularity                    ║
║    help, -h       Show this help message                    ║
║    version, -v    Show version information                  ║
║                                                              ║
║  OPTIONS:                                                    ║
║    -i, --input    <path>    Input audio file                ║
║    -o, --output   <path>    Output file path (for JSON)     ║
║    -t, --threshold <num>    YIN threshold (default: 0.05)   ║
║    -f, --format   <type>    Output format: json, console,   ║
║                             md, both (default: both)        ║
║    --verbose                Show detailed logs              ║
║    -h, --help               Show this help                  ║
║    -v, --version            Show version                    ║
║                                                              ║
║  EXAMPLES:                                                   ║
║    bun index.ts report -i ./song.mp3                        ║
║    bun index.ts report -i ./song.mp3 -f json                ║
║    bun index.ts report -i ./song.mp3 -f md -o ./report.md   ║
║    bun index.ts bml -i 75                                   ║
║    bun index.ts bml                                         ║
║    bun index.ts -t 0.03 -i ./song.mp3 --verbose             ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
  `);
}