/**
 * Created by yarivkatz on 08/02/2017.
 */


import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../../services/pokemon/pokemon.model";

@Component({
    selector: 'pokemons',
    template: `
    <h1>
        Welcome to the pokemons page
    </h1>
    `
})
export class PokemonsComponent{
    public pokemons : Pokemon[] = [];

    constructor(private _activatedRoute : ActivatedRoute){
        // _activatedRoute.data.subscribe((data) => {
        //     this.pokemons = data['pokemons'];
        // })
    }
}