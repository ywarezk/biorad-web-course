import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/Login/login.component";
import {PokemonsComponent} from "./components/Pokemons/pokemons.component";
import {PokemonResolve} from "./components/Pokemons/pokemons.resolve";
import {PokemonActivate} from "./components/Pokemons/pokemons.activate";


export const MyRouterModule = RouterModule.forRoot([
    {path: '', component: LoginComponent},
    {path: 'pokemons', component: PokemonsComponent, resolve: {
        'pokemons': PokemonResolve
    }}
]);