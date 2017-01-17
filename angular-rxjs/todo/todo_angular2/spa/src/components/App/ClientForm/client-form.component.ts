/**
 * Created by yarivkatz on 17/01/2017.
 */

import {Component} from '@angular/core';
import {ClientService} from "../../../services/client.service";

@Component({
    selector: 'client-form',
    template:
    `
        <h1>
        Hello from client form
        </h1>
        <form (ngSubmit)="addClientFormSubmitted()">
            <label>
                First Name
            </label>
            <input type="text" name="firstName" [(ngModel)]="firstName" />
            <label>
                Last Name
            </label>
            <input type="text" name="lastName" [(ngModel)]="lastName" />
            <button type="submit">Submit</button>
        </form>
    `
})
export class ClientForm{
    public firstName : string = '';
    public lastName : string = '';

    constructor(private _clientService : ClientService){}

    addClientFormSubmitted(){
        this._clientService.addClient({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }
}