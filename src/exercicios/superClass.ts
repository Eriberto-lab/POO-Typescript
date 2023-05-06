class Superclass {
    isSuper: boolean;

    constructor() {
        this.isSuper = true;
    }

    sayHello() {
        console.log('Olá mundo!');
    }

};

class Subclass  extends Superclass{
    
    constructor() {
        super();
        this.isSuper = false;
    }

} // subclass vazia porém tem o metodo sayHello da superclass

const superObj = new Superclass();
const subObj = new Subclass();

const myFunc = (obj: Superclass) => {
    
    obj.sayHello()

    console.log(obj.isSuper ? 'Super!' : 'Sub')
};

myFunc(superObj)
myFunc(subObj)

