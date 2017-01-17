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
import {ClientList} from "./components/App/ClientList/client-list.component";
import {ClientForm} from "./components/App/ClientForm/client-form.component";
import {ClientService} from "./services/client.service";

@NgModule({
    providers: [ClientService],
    declarations: [AppComponent, ClientList, ClientForm],
    imports: [BrowserModule, FormsModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);