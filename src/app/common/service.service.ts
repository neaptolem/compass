import { config } from '../config';
import {Http, Response} from "@angular/http";
import {Entity} from './model/entity';
import {ServiceLocator} from "../service-locator.service";

export abstract class Service<T extends Entity> {

    protected _http : Http;

    abstract prefix(): string;
    abstract getInstance(o: any): T;

    constructor() {
        this._http = ServiceLocator.injector.get(Http);
    }

    findAll(): Promise<T[]> {
        return this._http.get(config.endpoint + this.prefix())
            .map(res => {
                return res.json();
            })
            .toPromise();
    }

    findOne(id : string): Promise<T> {
        return this._http.get(config.endpoint + this.prefix() + '/' + id)
            .toPromise()
            .then(res => {
                return this.getInstance(res.json());
            });
    }

    create(entity : T): Promise<Response> {
        return this._http.post(config.endpoint + this.prefix(), entity)
            .toPromise()
            .then(res => {
                entity.id = res.text();
                return res;
            });
    }

    update(entity: T): Promise<Response> {
        return this._http.put(config.endpoint + this.prefix(), entity)
            .toPromise();
    }

    delete(entity: T): Promise<Response> {
        return this._http.delete(config.endpoint + this.prefix() + '/' + entity.id)
            .toPromise();
    }

}