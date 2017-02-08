import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Pokemon} from "../../services/pokemon/pokemon.model";
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {Injectable} from "@angular/core";
/**
 * Created by yarivkatz on 08/02/2017.
 */

@Injectable()
export class PokemonResolve implements Resolve<Pokemon[]>{
    constructor(private _pokemonService : PokemonService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon[]>{
        return this._pokemonService.getPokemons();
    }
}