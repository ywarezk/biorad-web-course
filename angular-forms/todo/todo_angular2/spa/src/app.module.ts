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

@NgModule({
    providers: [],
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);