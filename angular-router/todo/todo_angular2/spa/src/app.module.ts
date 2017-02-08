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
import {HomeComponent} from "./components/home.component";
import RouterModule from './router.module';
import {AboutComponent} from "./components/about.component";
import {MatrixComponent} from "./components/matrix.component";
import {DashboardSettingsComponent} from "./components/dashboard-settings.component";
import {DashboardRootComponent} from "./components/dashboard-root.component";
import {DashboardParentComponent} from "./components/dashboard-parent.component";
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {PokemonService} from "./services/pokemon/pokemon.service";
import {GetPokemonList} from "./components/pokemon-list/pokemons.resolve";

@NgModule({
    providers: [PokemonService, GetPokemonList],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        MatrixComponent,
        DashboardSettingsComponent,
        DashboardRootComponent,
        DashboardParentComponent,
        PokemonListComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);