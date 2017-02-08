import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Pokemon} from "./pokemon.model";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
/**
 * Created by yarivkatz on 08/02/2017.
 */


@Injectable()
export class PokemonService{
    constructor(private _http : Http){}

    getPokemons() : Observable<Pokemon[]>{
        return this._http.get('/api/v1.0/pokemon/?format=json', {
            headers: new Headers({
                'Authorization': 'Token ' + localStorage.getItem('token')
            })
        }).map((res : Response) => {
            const json = res.json();
            const result = [];
            for(let i=0; i<json.length; i++){
                result.push(new Pokemon(json[i]));
            }
            return result;
        });
    }
}