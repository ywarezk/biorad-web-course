/**
 * entry point for typescript
 */

// variable declaration

let myNumber : number = 10;
let myString : string = 'hello world';
let myBoolean : boolean;
let anyValue : any;
let myDateGo : Date = new Date();

// array
const myArray : Array<number> = [];

myArray.push(10);

//class

class Pokemon{
    constructor(public name : string = 'pikachu'){

    }

    sayHello(){
        console.log(`${this.name} said hello`);
    }
}

// inheritance

export class Pikachu extends Pokemon{
    constructor(public power : number){
        super('pikachu');
    }

    sayHello(){
        super.sayHello();
        console.log(`im pikachu!! my power is ${this.power}`);
    }
}

const pikachu = new Pikachu(10);
pikachu.sayHello();

// typescript exercise
/**
 * - open a new directory
 * - npm init
 * - install webpack
 * - create webpack.config.js
 * - install the ts-loader
 * - create entry point called Task.ts
 * - create our Task class with the following properties
 * - title : string, description : string, group : string, date : Date
 * - our constructor will get a dictionary object and will initialize the class properties
 * - public method that creates a dictionary from the properties toDict
 * - public method that returns a string of the object toString
 * - private method called fromDict that gets a dictionary and updates the properties
 * - to test create an instance of the class and call each method
 */

const pokemons : Pokemon[] = [];
pokemons.push({'name': 'squirtle', 'sayHello': () => {}});

// interface

interface Person {
    firstName : string,
    age? : number
}

class Student implements Person{
    public firstName : string = 'Yariv'
}

const personDict : Person = {firstName: 'yariv'};

