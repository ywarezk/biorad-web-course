/**
 * This directive will print hello world
 */

import {Directive, ElementRef, AfterContentInit, HostListener, HostBinding} from "@angular/core";

@Directive({
    selector: '[brd-hello-world]',
    host: {
        '[class]': 'getClass'
    }
})
export class HelloWorldDirective{
    @HostBinding('innerText') get getInnerText(){
        this._element.nativeElement.innerText = this._element.nativeElement.innerText + this.message;
    }
    public message : string = 'hello world';

    public get getClass(){
        return this.message + ' active';
    }

    constructor(private _element : ElementRef){

    }

    // ngAfterContentInit(): void {
    //     this._element.nativeElement.innerText = this._element.nativeElement.innerText + this.message;
    // }

    @HostListener('mouseover')
    onHover(){
        this._element.nativeElement.style='background-color: red;';
    }
}
