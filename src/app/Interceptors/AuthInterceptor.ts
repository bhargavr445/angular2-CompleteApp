import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "../localStorageService";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private localStorageService: LocalStorageService){}
    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        //console.log(req);
        var tokendata = this.localStorageService.getAuthData();
        var authHeader = 'Bearer'+tokendata.accessToken;
        const authReq=req.clone({setHeaders:{Authorization:authHeader}});
        //console.log("Cloned and modified Req");
        //console.log(authReq);
        return next.handle(authReq);
    }

}