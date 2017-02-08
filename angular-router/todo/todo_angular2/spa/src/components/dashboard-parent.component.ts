/**
 * homepage component
 */

import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: 'dashboard-parent',
    template: `
    <h1>
    Hello Dashboard parent
    </h1> 
    <router-outlet></router-outlet>
    `
})
export class DashboardParentComponent{

}
