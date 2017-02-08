/**
 * homepage component
 */

import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params, Data} from "@angular/router";
import {Pokemon} from "../../services/pokemon/pokemon.model";
@Component({
    selector: 'pokemon-list',
    template: `
    <h1>
    Hello pokemon list
    </h1> 
    <ul>
        <li *ngFor="let pokemon of pokemons">
            {{pokemon.name}}
        </li>
    </ul>
    `
})
export class PokemonListComponent{
    public pokemons : Pokemon[] = [];

    constructor(private _activatedRoute : ActivatedRoute){
        this._activatedRoute.data.subscribe((data : Data) => {
            this.pokemons = data['pokemons'];
        });
    }
}
