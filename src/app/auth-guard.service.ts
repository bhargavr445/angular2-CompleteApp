import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./localStorageService";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private localStorageService: LocalStorageService, private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            if(this.localStorageService.getAuthData().role=="admin"){
                return true;
            }else{
                this.localStorageService.clearData();
                this.router.navigate(['./login']);
            }    
    }

    canActivateChild(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return this.canActivate(route, state);
    }
}