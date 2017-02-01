/**
 * Created by yarivkatz on 01/02/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {PokemonCatcher} from "./catcher.model";
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonService} from "../pokemon/pokemon.service";

@Injectable()
export class PokemonCatcherService{

    constructor(private _http : Http, private _pokemonService : PokemonService){
    }

    getCatcher() : Observable<PokemonCatcher[]>{
        return this._http.get('/api/v1.0/pokemon-catcher/?format=json')
            .map((res : Response) : PokemonCatcher[] => {
                const json = res.json();
                const pokemonCatchers = [];
                for(let i=0; i<json.length; i++){
                    const pokemons : Pokemon[] = this._pokemonService.fromJsonToPokemon(json[i].pokemon_set);
                    json[i].pokemons = pokemons;
                    pokemonCatchers.push(new PokemonCatcher(json[i]));
                }
                return pokemonCatchers;
            });
    }

}