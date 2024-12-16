# Music-notes-detection

This project want to make music about the Singer voice.

## inputs

`file address`: path of file that you want analize

`time shape`: you want sort of time in `y` line or `x` line

## outPuts

In the first we use `librosa.piptrack` to make a table of `instantaneous frequency at bin **f**, time **t**`.

We make a directory in `/demo/0_singer/` for your file by your file name and save these file on that:

`wave file`: is it your file that copy in this directory

`pitches`: a csv file that have all `frequency at bin **f**, time **t**`

`magnitudes`: a csv file that have all `volume of frequency at bin **f**, time **t**`

`high-frequence`: a csv file that have all `loudly frequency at all channel, time **t**`

`data`: a json file that have all extra data that need in future

for use this package with bash use this command:

``` bash
py ./package/singer/0_pipTrack.py "C:\file.wav" y
```

or with `yarn` use

```bash
yarn sing "C:\file.wav" y
```

or just run `yarn sing` or `py ./package/singer/0_pipTrack.py`
