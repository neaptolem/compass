
import { Injectable } from '@angular/core';
import { Root } from '../model/root';
import { Service } from "../../common/service.service";

@Injectable()
export class RootService extends Service<Root> {
    
    getInstance(o: any): Root {
        return new Root(o);
    }

    prefix() {
        return '/root';
    }
    
}