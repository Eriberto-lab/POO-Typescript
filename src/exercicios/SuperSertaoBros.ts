abstract class Character {
    abstract talk(): void;

     abstract specialMove(): void;
};

class MeleeCharacter extends Character {
    talk(): void {
        console.log('Eu ataco na porrada e facada!')
    }

    specialMove(): void {
        console.log('Furacão giratorio com a pexeira')
    }
};


class LongRangeCharacter extends Character {
    talk(): void {
        console.log('Eu vou na Bala e na flechada!')
    }

    specialMove(): void {
        console.log('Pipoco do sertão!')
    }
};

const cangaceiroDoFacao = new MeleeCharacter();
const cangaceiroDoOitao = new LongRangeCharacter();

cangaceiroDoFacao.talk();
cangaceiroDoFacao.specialMove();
cangaceiroDoOitao.talk();
cangaceiroDoOitao.specialMove();

