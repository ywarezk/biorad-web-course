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

	/**
	 * entry point for typescript
	 */
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	// variable declaration
	var myNumber = 10;
	var myString = 'hello world';
	var myBoolean;
	var anyValue;
	var myDateGo = new Date();
	// array
	var myArray = [];
	myArray.push(10);
	//class
	var Pokemon = (function () {
	    function Pokemon(name) {
	        if (name === void 0) { name = 'pikachu'; }
	        this.name = name;
	    }
	    Pokemon.prototype.sayHello = function () {
	        console.log(this.name + " said hello");
	    };
	    return Pokemon;
	}());
	// inheritance
	var Pikachu = (function (_super) {
	    __extends(Pikachu, _super);
	    function Pikachu(power) {
	        var _this = _super.call(this, 'pikachu') || this;
	        _this.power = power;
	        return _this;
	    }
	    Pikachu.prototype.sayHello = function () {
	        _super.prototype.sayHello.call(this);
	        console.log("im pikachu!! my power is " + this.power);
	    };
	    return Pikachu;
	}(Pokemon));
	var pikachu = new Pikachu(10);
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


/***/ }
/******/ ]);
//# sourceMappingURL=ts.js.map