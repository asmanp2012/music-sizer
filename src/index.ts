import { Music } from './music';

const myMusic = new Music();
myMusic.tikPerBeat = 300;


myMusic.addInestroment('piano');

const leftHand = myMusic.play(4,'piano',['A2']);

myMusic.playOnTick(leftHand.noteOntime, 3, 'piano', [ 'E4' ]);

myMusic.play(1, 'piano', ["F3"]);

myMusic.save('Music.mid');