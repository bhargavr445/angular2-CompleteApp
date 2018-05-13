import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "../localStorageService";
import { Headers } from "@angular/http";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private localStorageService: LocalStorageService){
        
    }
        intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
            const header=new Headers();
            header.append("content-type","application/json");
            header.append("auth", "Bearer"+this.localStorageService.getAuthData().accessToken);
            var tokendata = this.localStorageService.getAuthData();
            var authHeader = 'Bearer'+tokendata.accessToken;
            const authReq=req.clone({setHeaders:{Authorization:authHeader}});
            return next.handle(req);
        }
}