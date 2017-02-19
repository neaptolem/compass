
import { Injectable } from '@angular/core';
import { Map } from '../model/map';
import { Service } from "../../common/service.service";

@Injectable()
export class MapService extends Service<Map> {
    
    getInstance(o: any): Map {
        return new Map(o);
    }

    prefix() {
        return '/map';
    }
    
    getFields(){
        return [
  {
    "id": 22,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "image",
    "label": "Image",
    "order": 1
  },
  {
    "id": 23,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 0,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "INTEGER"
    },
    "fieldName": "floor",
    "label": "Floor",
    "order": 2
  },
  {
    "id": 29,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 8,
      "typeName": "CityItem",
      "typeKind": "ENTITY",
      "primitiveEntityType": null
    },
    "fieldName": "owner",
    "label": "Owner",
    "order": 3
  }
];
    }
    
}