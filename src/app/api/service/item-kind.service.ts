
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
    
}