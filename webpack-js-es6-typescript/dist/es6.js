/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * entry point file
	 */
	
	// js variable declaration
	
	var myString = 'hello world';
	var myBoolean = true;
	var myNumber = 10;
	var myFloat = 1.5;
	
	// scope of var
	
	if (true) {
	    var message = 'hello world';
	}
	
	console.log(message);
	
	function myHello() {
	    if (true) {
	        var message = 'hello from function';
	    }
	    console.log(message);
	}
	
	for (var counter = 0; counter < 10; counter++) {
	    for (var counter = 0; counter < 10; counter++) {
	        console.log(counter);
	    }
	}
	
	// es6 variable declaration
	
	var myString2 = 'hello world2';
	
	var myPeopleGo = 10;
	myPeopleGo = 'let my people go';
	
	// array dictionaries
	
	var myArray = [];
	myArray.push('hello');
	myArray.push(10);
	myArray.push(['foo bar']);
	myArray.length;
	
	// dictionaries
	
	var myDict = {};
	myDict['hello'] = 'world';
	myDict['foo'] = 100;
	myDict.hello;
	
	// if
	
	// ===
	// !==
	// ==
	// !=
	
	if (true) {} else if (true) {}
	
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
	
	function sayHello(message) {
	    console.log(message);
	}
	
	sayHello('hello world');
	
	// class
	
	function Pokemon(name) {
	    var _name = name || 'pikachu';
	
	    this.sayHello = function () {
	        console.log(_name + ' said hello');
	    };
	}
	
	var pikachu = new Pokemon();
	var squirtle = new Pokemon('squirtle');
	
	pikachu.sayHello();
	squirtle.sayHello();
	
	console.log(pikachu._name);
	
	function Pikachu(power) {
	    Pokemon.call(this, 'pikachu');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=es6.js.map