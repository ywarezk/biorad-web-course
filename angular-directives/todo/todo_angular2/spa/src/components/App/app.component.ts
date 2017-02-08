/**
 * Root component
 */

import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

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
export class AppComponent{



}
