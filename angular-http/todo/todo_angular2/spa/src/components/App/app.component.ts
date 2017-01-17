/**
 * Root component
 */

import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Pokemon} from "../../services/pokemon/pokemon.model";
import {PokemonService} from "../../services/pokemon/pokemon.service";

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('./app.style.scss'),
        require('bootstrap/dist/css/bootstrap.css'),
        require('font-awesome/css/font-awesome.css')
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

    public pokemons : Pokemon[] = [];

    constructor(private _pokemonService : PokemonService){

    }

    ngOnInit(){
        this._pokemonService.getAllPokemons().subscribe((pokemons : Pokemon[]) => {
            this.pokemons = pokemons;
        })
    }

}
