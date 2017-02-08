/**
 * homepage component
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector: 'home',
    template: `
    <h1>
    Hello homepage
    </h1>
    <button (click)="gotoAbout()">
        Goto about page
    </button>
    <form (ngSubmit)="goToMatrixPage()">
        <label>
        Matrix param
        </label>
        <input name="param" [(ngModel)]="matrixParam" />
    </form>
    `
})
export class HomeComponent{
    public matrixParam : string = '';
    constructor(private _router : Router){}

    gotoAbout(){
        this._router.navigateByUrl('/about');
    }

    goToMatrixPage(){
        this._router.navigateByUrl(`/matrix/${this.matrixParam}`);
    }
}
