import { Injectable } from "@angular/core";
import { TokenParams } from "./model/tokenParams";
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable()
export class LocalStorageService {

    public setAuthData(auth : TokenParams):void{
        localStorage.setItem("Authorization", JSON.stringify(auth));
    }

    public getAuthData(): TokenParams{
        let tokenData=JSON.parse(localStorage.getItem("Authorization"));
        return tokenData==null ? null:tokenData;
    }
}