/**
 * Created by yarivkatz on 01/02/2017.
 */


import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {Pokemon} from "../../services/pokemon/pokemon.model";
import {Injectable} from "@angular/core";

@Injectable()
export class GetPokemonList implements Resolve<Pokemon[]>{
    constructor(private _pokemonService : PokemonService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Pokemon[]>{
        return this._pokemonService.getAllPokemons();
    }
}