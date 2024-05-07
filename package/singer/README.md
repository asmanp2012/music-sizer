# Music-notes-detection

This project want to make music about the Singer voice.

In the first we use `librosa.piptrack` to make a table of `instantaneous frequency at bin **f**, time **t**`.

We collect all of them and save on the `music-freq.csv`.

``` bash
python music_notes_detection.py
```

After that we know i cant detect which one of the frequency in a frame is important then we should calculate all of the note frequency is exist on the world but for faster use [this site](https://www.liutaiomottola.com/formulae/freqtab.htm) and save it on the `music-freq.csv`.
