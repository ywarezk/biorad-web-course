/**
 * Navigation bar component
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: `
    <nav>
        <ul>
            <li>
                <a href="https://www.google.com">
                    Google
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com">
                    Facebook
                </a>
            </li>
            <li>
                <button (click)="clickExtraLink()">
                    {{myLink}}
                </button>
            </li>
        </ul>
    </nav>
    `
})
export class NavBar{
    @Input() myLink : string = '';
    @Output() extraLinkEmitter : EventEmitter<string> = new EventEmitter();

    public mySecretVar : string = 'secret message';

    public clickExtraLink(){
        console.log('button clicked');
        this.extraLinkEmitter.emit('the extra link is pressed');
    }
}
