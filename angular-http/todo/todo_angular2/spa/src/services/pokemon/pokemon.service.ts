/**
 * Created by yarivkatz on 17/01/2017.
 */

import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Pokemon} from "./pokemon.model";
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService{

    constructor(private _http : Http){

    }

    /**
     *
     * @param json
     * @private
     * @returns Pokemon[]
     */
    private _fromJsonToPokemon(json : Array<any> | any) : Pokemon[]{
        const pokemonArray : Pokemon[] = [];
        if(Array.isArray(json)){
            for(let i=0; i<json.length; i++){
                pokemonArray.push(new Pokemon(json[i]));
            }
        } else {
            pokemonArray.push(new Pokemon(json));
        }
        return pokemonArray;
    }

    getAllPokemons() : Observable<Pokemon[]>{
        return this._http.get('/api/v1.0/pokemon/?format=json')
            .map((response : Response) => {
                return this._fromJsonToPokemon(response.json())
            });
    }
}