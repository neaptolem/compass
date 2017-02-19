
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
    
}