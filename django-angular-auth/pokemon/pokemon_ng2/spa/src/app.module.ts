/**
 * entry point file
 */

import 'reflect-metadata';
import 'zone.js';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/App/app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from "./components/Login/login.component";
import {PokemonsComponent} from "./components/Pokemons/pokemons.component";
import {MyRouterModule} from "./routes.module";
import {HttpModule} from "@angular/http";
import {UserService} from "./services/user/user.service";
import {PokemonService} from "./services/pokemon/pokemon.service";
import {PokemonResolve} from "./components/Pokemons/pokemons.resolve";
import {PokemonActivate} from "./components/Pokemons/pokemons.activate";

@NgModule({
    providers: [UserService, PokemonService, PokemonResolve, PokemonActivate],
    declarations: [AppComponent, LoginComponent, PokemonsComponent],
    imports: [BrowserModule, FormsModule, MyRouterModule, HttpModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);