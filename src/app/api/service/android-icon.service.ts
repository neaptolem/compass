
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
    
}