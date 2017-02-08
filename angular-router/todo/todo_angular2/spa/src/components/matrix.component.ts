/**
 * homepage component
 */

import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: 'about',
    template: `
    <h1>
    Hello matrix page
    </h1>
    <p>
        I got matrix params - {{id}}
    </p>
    `
})
export class MatrixComponent{
    public id : string = '';
    constructor(private _activatedRoute : ActivatedRoute){
        this._activatedRoute.params.subscribe((params : Params) => {
            this.id = params['id'];
        });
    }
}
