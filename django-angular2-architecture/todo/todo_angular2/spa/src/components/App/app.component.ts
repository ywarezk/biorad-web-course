/**
 * Root component
 */

import {Component} from '@angular/core';
import {HelloService} from "../../services/hello.service";

@Component({
    selector: 'app',
    template: require('./app.template.html')
})
export class AppComponent{
    public myGreeting : string = '';
    public greetings : string[] = [];

    constructor(private _helloService: HelloService){}

    public componentAddGreeting() : void{
        this._helloService.addGreeting(this.myGreeting);
        this.greetings = this._helloService.getGreetings();
    }
}
