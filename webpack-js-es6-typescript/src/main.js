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
    var self = this;
    var _name = name || 'pikachu';
    this.age = 10;
    this.sayHello = function (){
        console.log(_name + ' said hello');
    }

    this.birthday = function(){
        setTimeout(() => {
            this.age++;
        }, 1000)
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




pikachu.birthday();
setTimeout(function(){
    console.log('pikachu age is: ' + pikachu.age);
}, 2000)

// lambda function

const myLambda = () => {
    return 'hello lambda'
};

const myLambda2 = () => 'hello lambda';

//  Promise

console.log('1');
const promise = new Promise(function(resolve, reject){
    console.log('2');
    setTimeout(function(){
        console.log('6');
        reject('FAIL!!!');
        // resolve('hello from promise');
    }, 3000)
    console.log('3');
});

console.log('4');
promise.then(function(data){
    console.log(data);
}, function(error){
    console.log('7');
    console.error('error is: ' + error);
})
console.log('5');

// Promise server communication

// https://nztodo.herokuapp.com/api/task/?format=json

const serverPromise = new Promise(function(resolve, reject){
    const request = new XMLHttpRequest();
    request.open('GET', 'https://nztodo.herokuapp.com/api/task/?format=json');
    request.addEventListener("load", function(event){
        if(event.target.readyState == 4 && event.target.status == 200){
            const arrayResponse = JSON.parse(event.target.response);
            resolve(arrayResponse);
        } else if(event.target.status != 200) {
            reject('What you doing fool');
        }
    });
    request.send();
});

const serverPromise2 = serverPromise.then(function(arrayTasks){
    const newArray = [];
    for(let i=0; i<arrayTasks.length; i++){
        newArray.push(new Task(arrayTasks[i]));
    }
    return newArray;
}, function(message){
    console.error(message);
});

serverPromise2.then(function(arrayTaskInstances){

});


$.ajax('https://nztodo.herokuapp.com/api/task/?format=json', {
    method: 'GET'
}).then(function(data){
    debugger;
});

/**
 * - create a class called TaskService
 * - TaskService will have the following methods:
 *     getTasks : Promise<Task[]>
 *     getTask : Promise<Task> will get an argument of id of task
 *     createTask : Promise<Task> will get a param of type Task
 *     updateTask : Promise<Task> will get a Task and will update by its value
 *     deleteTask : Promise<Response> will get a task and delete it
 */