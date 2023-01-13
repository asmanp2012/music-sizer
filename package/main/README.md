# `@music-sizer/main`

`Music Sizer` is a typescript library for make music programmatically.

## How to use

```Typescript
import { Music } from '@music-sizer/main';
const myMusic = new Music();
myMusic.tempo = 140;
myMusic.addInstrument('piano');
myMusic.timeSignature = { numerator: 3, denominator: 4 };

myMusic.play({ 
    instrument, 
    noteList: ['C4'], 
    inputDuration: { type: 4, length: 1 }, 
    velocity: 50 
});
```

## Time Type

| Note        | `Time Type` |
| ----------- | ----------- |
| **`𝅝`**     | 1           |
| **`𝅗𝅥`**     | 2           |
| **`𝅘𝅥`**     | 3           |
| **`𝅘𝅥𝅮`**     | 4           |
| **`𝅘𝅥𝅯`**     | 5           |
| **`𝅘𝅥𝅰`**     | 6           |
| **`𝅘𝅥𝅱`**     | 7           |
| **`𝅘𝅥𝅲`**     | 8           |
| `More ...`  | `More ...`  |
