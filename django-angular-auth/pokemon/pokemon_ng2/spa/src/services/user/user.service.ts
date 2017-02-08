

import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {ObserveOnMessage} from "rxjs/operator/observeOn";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class UserService{

    constructor(private _http : Http){

    }

    login(username : string, password : string) : Observable<string>{
        return this._http.post('/api/v1.0/user/login/', {
            username: username,
            password: password
        }).map((res : Response) : string => {
            const json = res.json();
            localStorage.setItem('token', json.token);
            return json.token;
        });
    }
}
