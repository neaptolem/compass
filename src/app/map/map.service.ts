import { Injectable } from '@angular/core';
import { Map } from './map';

// TODO: mock => real service
@Injectable()
export class MapService {

  map1 : Map = {
    id: "1",
    floor: 1,
    url: 'http://maps.lnu.edu.ua/api/resources/maps/f1.svg'
  };

  map3 = {
    id: "3",
    floor: 3,
    url: 'http://maps.lnu.edu.ua/api/resources/maps/f3.svg'
  };

  findAll(){
    return [
      this.map1,
      this.map3
    ];
  }

  findOne(id : string) : Map {
    return id == '1' ? this.map1 : this.map3;
  }
}
