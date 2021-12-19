import { Music } from './music';

const myMusic = new Music();
myMusic.tikPerBeat = 300;


myMusic.addInestroment('piano');
myMusic.timeSignature = {
    numerator: 6,
    denominator: 8
}

myMusic.play(1, 'piano', ["C3"]);
myMusic.play(1, 'piano', ["D3"]);
myMusic.play(1, 'piano', ["E3"]);
myMusic.play(1, 'piano', ["F3"]);
myMusic.play(1, 'piano', ["G3"]);
myMusic.play(1, 'piano', ["A3"]);

myMusic.save('Music.mid');