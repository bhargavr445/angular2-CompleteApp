import { Injectable } from "@angular/core";
import { TokenParams } from "./model/tokenParams";

@Injectable()
export class LocalStorageService {

    public setAuthData(auth : TokenParams):void{

    }

    public getAuthData(): TokenParams{
        return null;
    }
}