/**
 * Created by yarivkatz on 17/01/2017.
 */

import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../services/client.service";

@Component({
    selector: 'client-list',
    template:
    `
        <h1>Hello from client list</h1>
        <ul>
            <li *ngFor="let client of clients">
                {{client.firstName}} {{client.lastName}}
            </li>
        </ul>
    `
})
export class ClientList implements OnInit{
    public clients : Array<{firstName : string, lastName : string}> = [];

    constructor(private _clientService : ClientService){

    }

    ngOnInit(){
        this.clients = this._clientService.getClients();
        this._clientService.clientStream.subscribe(() => {
            console.log('our client stream subscriber from client list');
            this.clients = this._clientService.getClients();
        })
    }
}