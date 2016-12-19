/**
 * entry point file
 */

// js variable declaration

var myString = 'hello world';
var myBoolean = true;
var myNumber = 10;
var myFloat = 1.5;

// scope of var

if (true){
    var message = 'hello world';
}

console.log(message);

function myHello(){
    if(true){
        var message = 'hello from function';
    }
    console.log(message)
}

for(var counter = 0; counter < 10; counter++){
    for(var counter = 0; counter < 10; counter++){
        console.log(counter);
    }
}

// es6 variable declaration

const myString2 = 'hello world2';

let myPeopleGo = 10;
myPeopleGo = 'let my people go'

// array dictionaries

const myArray = [];
myArray.push('hello');
myArray.push(10);
myArray.push(['foo bar']);
myArray.length;

// dictionaries

const myDict = {};
myDict['hello'] = 'world';
myDict['foo'] = 100;
myDict.hello;

// if

// ===
// !==
// ==
// !=

if (true){

}
else if(true){

}

switch (myPeopleGo) {
    case 10:
        console.log('sfgdsfg');
        break;
    default:
        console.log('default');
}

// loop

// for(var i=0; i<10; i++){
//     console.log(i);
// }
//
// var i = 0;
// while(i<10){
//     i++;
// }

// i=0;
// do{
//     i++
// }while(i !== 0);


// function

function sayHello(message){
    console.log(message);
}

sayHello('hello world');

// class

function Pokemon(name){
    var _name = name || 'pikachu';

    this.sayHello = function (){
        console.log(_name + ' said hello');
    }
}

var pikachu = new Pokemon();
var squirtle = new Pokemon('squirtle');

pikachu.sayHello();
squirtle.sayHello();

console.log(pikachu._name);

function Pikachu(power){
    Pokemon.call(this, 'pikachu');

}



