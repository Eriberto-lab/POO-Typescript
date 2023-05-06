class Superclass {
    isSuper = true;

    sayHello() {
        console.log('Olá mundo!');
    }

};

class Subclass  extends Superclass{

} // subclass vazia porém tem o metodo sayHello da superclass

const superObj = new Superclass();
const subObj = new Subclass();

const myFunc = (obj: Superclass) => {
    
    obj.sayHello()
};

myFunc(superObj)
myFunc(subObj)

