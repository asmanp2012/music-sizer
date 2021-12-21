import { Music } from './music';

const myMusic = new Music();
myMusic.tikPerBeat = 300;


myMusic.addInstrument('piano');
myMusic.timeSignature = {
    numerator: 3,
    denominator: 4
}

myMusic.playHidden(3, 'piano', ["A5"], 3);
myMusic.play(3, 'piano', ["E4"]);
myMusic.play(4, 'piano', ["E3"]);
myMusic.play(4, 'piano', ["F3"]);
myMusic.play(4, 'piano', ["G3"]);
myMusic.play(2, 'piano', ["A3"]);

myMusic.save('Music.mid');