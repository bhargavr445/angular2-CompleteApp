import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./localStorageService";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private localStorageService: LocalStorageService, private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            alert('authguard working');
            if(this.localStorageService.getAuthData().role=="admin"){
                //alert('if authguard working');
                //console.log(this.localStorageService.getAuthData().userName);
                //console.log(this.localStorageService.getAuthData().userName);
                return true;
            }else{
                console.log(this.localStorageService.getAuthData().role);
                alert('else authguard working');
                this.router.navigate(['./login']);
                //return false;
            }
            
    }
}