/**
 * export for our RouterModule with our routes
 *
 * /dashboard/
 * /dashboard/settings/
 * /dashboard/issue/305/
 *
 */


import {RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {MatrixComponent} from "./components/matrix.component";
import {DashboardParentComponent} from "./components/dashboard-parent.component";
import {DashboardRootComponent} from "./components/dashboard-root.component";
import {DashboardSettingsComponent} from "./components/dashboard-settings.component";
import {GetPokemonList} from "./components/pokemon-list/pokemons.resolve";
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";


export default RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'matrix/:id', component: MatrixComponent},
    {path: 'dashboard', component: DashboardParentComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: DashboardRootComponent},
        {path: 'settings', component: DashboardSettingsComponent}
    ]},
    {path: 'pokemon-list', component: PokemonListComponent, resolve: {
        pokemons: GetPokemonList
    }}
]);
