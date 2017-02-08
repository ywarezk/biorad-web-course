import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
/**
 * Created by yarivkatz on 08/02/2017.
 */

@Injectable()
export class PokemonActivate implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return localStorage.getItem('token') != null;
    }
}