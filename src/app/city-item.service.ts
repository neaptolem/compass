import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CityItem } from './city-item';
import { config } from './config';

@Injectable()
export class CityItemService {

  prefix : string = '/cityItem';

  constructor(private _http: Http){

  }

  findAll() {
    return this._http.get(config.endpoint + this.prefix);
  }

  create(cityItem : CityItem){

  }

  update(cityItem : CityItem){

  }

  delete(cityItem : CityItem){

  }

}
