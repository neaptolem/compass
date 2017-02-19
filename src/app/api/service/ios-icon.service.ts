
import { Injectable } from '@angular/core';
import { IosIcon } from '../model/ios-icon';
import { Service } from "../../common/service.service";

@Injectable()
export class IosIconService extends Service<IosIcon> {
    
    getInstance(o: any): IosIcon {
        return new IosIcon(o);
    }

    prefix() {
        return '/iosIcon';
    }
    
    getFields(){
        return [
  {
    "id": 12,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "size2x",
    "label": "Size 2x"
  },
  {
    "id": 13,
    "fieldKind": "REGULAR",
    "fieldType": {
      "id": 3,
      "typeName": "Undefined",
      "typeKind": "PRIMITIVE",
      "primitiveEntityType": "URL_RESOURCE"
    },
    "fieldName": "size3x",
    "label": "Size 3x"
  }
];
    }
    
}