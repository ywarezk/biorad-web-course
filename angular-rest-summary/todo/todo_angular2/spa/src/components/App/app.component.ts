/**
 * Root component
 */

import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Pokemon} from "../../services/pokemon/pokemon.model";
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {PokemonCatcherService} from "../../services/catcher/catcher.service";
import {PokemonCatcher} from "../../services/catcher/catcher.model";

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

    // public pokemons : Pokemon[] = [];
    public catchers : PokemonCatcher[] = [];

    constructor(private _pokemonService : PokemonService, private _pokemonCatcherService : PokemonCatcherService){

    }

    ngOnInit(){
        // this._pokemonService.getAllPokemons().subscribe((pokemons : Pokemon[]) => {
        //     this.pokemons = pokemons;
        // });

        this._pokemonCatcherService.getCatcher().subscribe((catchers : PokemonCatcher[]) => {
            this.catchers = catchers;
        })
    }

}
