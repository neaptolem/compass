
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
    
}