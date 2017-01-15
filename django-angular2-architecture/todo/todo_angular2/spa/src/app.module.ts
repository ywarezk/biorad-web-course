/**
 * entry point file
 */

import 'reflect-metadata';
import 'zone.js';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component.ts';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    providers: [],
    declarations: [AppComponent],
    imports: [BrowserModule],
    exports: [],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);