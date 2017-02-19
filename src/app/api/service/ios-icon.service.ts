
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
    
}