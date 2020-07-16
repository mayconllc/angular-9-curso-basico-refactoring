import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Header } from "./header.model";

@Injectable({
    providedIn: 'root'
})

export class HeaderService {
    
    private _header = new BehaviorSubject<Header>({
        title: 'Home',
        icon: 'home'
    })

    constructor() {}

    get header(): Header {
        return this._header.value;
    }

    set header(header: Header){
        this._header.next(header);
    }
}