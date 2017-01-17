import {Subject} from "rxjs";
/**
 * Created by yarivkatz on 17/01/2017.
 */


export class ClientService{

    private _clients : Array<{firstName : string, lastName: string}> = [];
    public clientStream : Subject<{firstName : string, lastName: string}> = new Subject();

    public addClient(client){
        this._clients.push(client);
        this.clientStream.next(client);
    }

    public getClients(){
        return this._clients;
    }

}