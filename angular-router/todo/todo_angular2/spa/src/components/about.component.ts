/**
 * homepage component
 */

import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: 'about',
    template: `
    <h1>
    Hello aboutpage
    </h1>
    <p>
        I got query params - pokemon name: {{pokemonName}}
    </p>
    <button (click)="gotoHome()">
        Goto Homepage
    </button>
    `
})
export class AboutComponent{
    public pokemonName : string = '';
    constructor(private _router : Router, private _activatedRoute : ActivatedRoute){
        this._activatedRoute.queryParams.subscribe((params : Params) => {
            this.pokemonName = params['pokemon'];
        });
    }

    gotoHome(){
        this._router.navigateByUrl('/');
    }
}
