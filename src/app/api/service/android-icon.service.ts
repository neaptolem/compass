
import { Injectable } from '@angular/core';
import { AndroidIcon } from '../model/android-icon';
import { Service } from "../../common/service.service";

@Injectable()
export class AndroidIconService extends Service<AndroidIcon> {
    
    getInstance(o: any): AndroidIcon {
        return new AndroidIcon(o);
    }

    prefix() {
        return '/androidIcon';
    }
    
    getFields(){
        return [
  {
    "id": 14,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "xxxhdpi",
    "label": "Xxxhdpi"
  },
  {
    "id": 15,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "xxhdpi",
    "label": "Xxhdpi"
  },
  {
    "id": 16,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "xhdpi",
    "label": "Xhdpi"
  },
  {
    "id": 17,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "mdpi",
    "label": "Mdpi"
  },
  {
    "id": 18,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "hdpi",
    "label": "Hdpi"
  }
];
    }
    
}