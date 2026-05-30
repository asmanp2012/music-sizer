# Music Sizer

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.3-black)](https://bun.sh/)

A modular TypeScript library for programmatic music creation, audio analysis, and MIDI generation.

## What is Music Sizer?

Music Sizer is a suite of packages that help musicians, producers, and developers:

- **Analyze** vocal recordings to detect notes, tempo, and time signature
- **Generate** MIDI files from musical notation
- **Create** guitar and fret-guitar arrangements programmatically

## Packages

| Package | Description |
| --------- | ------------- |
| `@music-sizer/singer` | Vocal analysis using pYIN and autocorrelation |
| `@music-sizer/main` | Core MIDI generation and music sequencing |
| `@music-sizer/guitar` | Guitar chord library with rhythm patterns |
| `@music-sizer/fret-guitar` | Fretboard-aware note-to-MIDI conversion |

## Features

### Singer Package

- pYIN-based pitch detection
- Autocorrelation tempo estimation
- Time signature detection from beat patterns
- Output: Key, BPM, time signature, detected notes

### Main Package

- Programmatic note sequencing
- Multi-track MIDI export
- Flexible time duration system
- Tempo and time signature control

### Guitar Package

- Predefined chord shapes (C, D, E, G, Am, Em, Bm, etc.)
- Rhythm patterns (down, up, half-down, half-up)
- Syncopation support

## Installation

```bash
bun add @music-sizer/singer
bun add @music-sizer/main
bun add @music-sizer/guitar
bun add @music-sizer/fret-guitar
```
