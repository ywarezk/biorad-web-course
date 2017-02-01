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
import {HttpModule} from "@angular/http";
import {PokemonService} from "./services/pokemon/pokemon.service";
import {PokemonCatcherService} from "./services/catcher/catcher.service";


@NgModule({
    providers: [PokemonService, PokemonCatcherService],
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);