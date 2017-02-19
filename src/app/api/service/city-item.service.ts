
import { Injectable } from '@angular/core';
import { CityItem } from '../model/city-item';
import { Service } from "../../common/service.service";

@Injectable()
export class CityItemService extends Service<CityItem> {
    
    getInstance(o: any): CityItem {
        return new CityItem(o);
    }

    prefix() {
        return '/cityItem';
    }
    
    getFields(){
        return [
  {
    "id": 11,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 7,
      "typeName": "Root",
      "typeKind": "ENTITY",
      "primitiveEntityType": null
    },
    "fieldName": "owner",
    "label": "Owner",
    "order": 1
  },
  {
    "id": 24,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 1,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "STRING"
    },
    "fieldName": "name",
    "label": "Name",
    "order": 2
  },
  {
    "id": 25,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 2,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "DOUBLE"
    },
    "fieldName": "longitude",
    "label": "Longitude",
    "order": 3
  },
  {
    "id": 26,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 2,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "DOUBLE"
    },
    "fieldName": "latitude",
    "label": "Latitude",
    "order": 4
  },
  {
    "id": 27,
    "fieldKind": "COLLECTION",
    "fieldType": {
      "id": 9,
      "typeName": "Map",
      "typeKind": "ENTITY",
      "primitiveEntityType": null
    },
    "fieldName": "maps",
    "label": "Maps",
    "order": 5
  },
  {
    "id": 28,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 4,
      "typeName": "ItemKind",
      "typeKind": "ENTITY",
      "primitiveEntityType": null
    },
    "fieldName": "kind",
    "label": "Kind",
    "order": 6
  }
];
    }
    
}