import { Music } from './music';

const myMusic = new Music();
myMusic.tikPerBeat = 300;


myMusic.addInstrument('piano');
myMusic.timeSignature = {
    numerator: 3,
    denominator: 4
}

myMusic.play('piano', ["E3"], { type:3, length:2 });
myMusic.play('piano', ["A4"], { type:3, length:3 });
myMusic.play('piano', ["C4"], { type:4, length:1 }, { type:3, length:1 });
myMusic.play('piano', ["A3"], { type:4, length:1 });
myMusic.play('piano', ["C4"], { type:3, length:1 }, { type:3, length:1 });
myMusic.play('piano', ["A3"], { type:3, length:1 });

myMusic.play('piano', ["E3"], { type:3, length:2 }, { type:3, length:1 });
myMusic.play('piano', ["C5"], { type:3, length:3 });
myMusic.play('piano', ["C4"], { type:4, length:1 }, { type:3, length:1 });
myMusic.play('piano', ["A3"], { type:4, length:1 });
myMusic.play('piano', ["C4"], { type:3, length:1 }, { type:3, length:1 });
myMusic.play('piano', ["A3"], { type:3, length:1 });

myMusic.play('piano', ["E3"], { type:3, length:2 }, { type:3, length:1 });
myMusic.play('piano', ["E5"], { type:3, length:2 });
myMusic.play('piano', ["C4"], { type:4, length:1 }, { type:3, length:1 });
myMusic.play('piano', ["A3"], { type:4, length:1 });
myMusic.play('piano', ["C4"], { type:3, length:1 }, { type:3, length:1 });
myMusic.play('piano', ["A3"], { type:3, length:1 });

myMusic.play('piano', ["E3"], { type:3, length:2 }, { type:3, length:1 });
myMusic.play('piano', ["C5"], { type:6, length:3 });
myMusic.play('piano', ["D5"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["C5"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["B4"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["D5"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["B4"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["A4"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["B4"], { type:6, length:3 }, { type:6, length:3 });
myMusic.play('piano', ["A4"], { type:6, length:3 }, { type:6, length:3 });

myMusic.play('piano', ["E3"], { type:3, length:2 }, { type:6, length:3 });
myMusic.play('piano', ["G4"], { type:3, length:1 });

myMusic.save('Music.mid');