/**
 * Created by yarivkatz on 08/02/2017.
 */


import {Component} from "@angular/core";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    template: `
    <h1>
    Welcome to the login page
    </h1>
    <form (ngSubmit)="submitLogin()" > 
        <label>
        Username:
        </label>
        <input type="text" name="username" [(ngModel)]="username" />
        <br/>
        <label>
        Password:
        </label>
        <input type="password" name="password" [(ngModel)]="password" />
        <br/>
        <button type="submit">
        Login
        </button>
        <div *ngIf="message">
            {{message}}
        </div>
    </form>
    `
})
export class LoginComponent{
    public username : string = '';
    public password : string = '';
    public message : string = '';

    constructor(private _userService : UserService, private _router : Router){}

    public submitLogin(){
        debugger;
        this._userService.login(this.username, this.password).subscribe((token) => {
            this._router.navigateByUrl('/pokemons');
        }, () => {
            this.message = 'Bad Credentials';
        })
    }
}