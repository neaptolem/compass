import {Injectable} from '@angular/core';
import {CityItem} from './city-item';
import {config} from "../config";
import {Http} from "@angular/http";
import {ServiceLocator} from "../service-locator.service";

@Injectable()
export class IconsService {

    private _http: Http;

    constructor() {
        this._http = ServiceLocator.injector.get(Http);
    }

    map(): Promise<any> {
        return this._http.get(config.endpoint + this.prefix() + '/map')
            .map(res => {
                return res.json();
            })
            .toPromise();
    }

    androidIcons(): Promise<any> {
        return this._http.get(config.endpoint + this.prefix() + '/android')
            .map(res => {
                return res.json();
            })
            .toPromise();
    }

    prefix() {
        return '/icons';
    }

}
