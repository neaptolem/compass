
import { Injectable } from '@angular/core';
import { ItemKind } from '../model/item-kind';
import { Service } from "../../common/service.service";

@Injectable()
export class ItemKindService extends Service<ItemKind> {
    
    getInstance(o: any): ItemKind {
        return new ItemKind(o);
    }

    prefix() {
        return '/itemKind';
    }
    
    getFields(){
        return [
  {
    "id": 19,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 1,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "STRING"
    },
    "fieldName": "name",
    "label": "Name"
  },
  {
    "id": 20,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 5,
      "typeName": "IosIcon",
      "typeKind": "ENTITY",
      "primitiveEntityType": null
    },
    "fieldName": "iosIcon",
    "label": "Ios Icon"
  },
  {
    "id": 21,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 6,
      "typeName": "AndroidIcon",
      "typeKind": "ENTITY",
      "primitiveEntityType": null
    },
    "fieldName": "androidIcon",
    "label": "Android Icon"
  }
];
    }
    
}