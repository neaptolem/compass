import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CityItem } from './city-item';
import { config } from '../shared/config';

@Injectable()
export class CityItemService {

  prefix : string = '/cityItem';

  constructor(private _http: Http){

  }

  findAll() {
    return this._http.get(config.endpoint + this.prefix)
    .map(res => res.json())
    .toPromise();
  }

  create(cityItem : CityItem) : Promise<Response> {
    return this._http.post(config.endpoint + this.prefix, cityItem)
    .toPromise()
    .then(res => {
      cityItem.id = res.text();
      return res;
    });
  }

  update(cityItem : CityItem) : Promise<Response> {
    return this._http.put(config.endpoint + this.prefix, cityItem)
    .toPromise();
  }

  delete(cityItem : CityItem) : Promise<Response> {
    return this._http.delete(config.endpoint + this.prefix + '/' + cityItem.id)
    .toPromise();
  }

}
