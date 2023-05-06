interface MyInterface {
    myNumber: number;
    myFunc(myParam: number): string
}


class MyClass implements MyInterface {

    constructor(public myNumber: number) {}

    myFunc(myParam: number): string {
         const total = this.myNumber + myParam;
        console.log(`a soma entre ${this.myNumber} e ${myParam} é de ${total}`) 
        return `a soma entre ${this.myNumber} e ${myParam} é de ${total}`
    }
}

const classe = new MyClass(100)

classe.myFunc(50);