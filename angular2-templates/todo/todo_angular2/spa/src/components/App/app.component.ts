/**
 * Root component
 */

import {Component} from '@angular/core';
import {NavBar} from "./NavBar/nav-bar.component";

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('./app.style.scss'),
    ],
})
export class AppComponent{
    public stamString : number = 10
    public isButtonDisabled : boolean = false;
    public myColor : string = 'red';
    public twoWayBindingDemo1 : string = 'hello pokemon';
    public myGreetingArray : string[] = [];
    public myStyleBorder = '3px solid brown';
    public myStyleDictionary = {
        'background-color': 'yellow',
        'border-size': '5px',
        'border-radius': '30%'
    }
    public myBioradClass : boolean = true;
    public myClassDictionary = {
        'bio-rad': true,
        'bg-pink': false,
        'bg-yellow': true
    }

    public pokemons = [
        {name: 'pikachu', id: 355234234, strength: 50},
        {name: 'squirtle', id: 1, strength: 60},
        {name: 'charmender', id: 2, strength: 80},
        {name: 'balbasour', id: 3, strength: 70},
    ]

    public groceryList = [
        'bannana',
        'watermelon',
        'cucumber',
        'tomato'
    ]

    public myInterpolationFunc(message : string = 'My homepage') : string{
        return message + ' bio-rad.co.il';
    }

    public changeHoverMeBackground(){
        this.myColor = 'blue';
        this.twoWayBindingDemo1 = 'RESET!!!';
    }

    public myNavbarAction(message : string, navBar : NavBar){
        this.myColor = 'purple';
        console.warn(navBar.mySecretVar);
        console.log('app component my navbar action!!!!');
        this.myClassDictionary['bg-pink'] = true;
        this.myClassDictionary['bg-yellow'] = false;

    }

    submitGreeting(greeting : HTMLInputElement){
        this.myGreetingArray.push(greeting.value);
        greeting.value = '';
    }
}
