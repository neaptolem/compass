import {NgModule, Injector} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CityItemDialogComponent} from './city-item/city-item-dialog.component';
import {CityMapComponent} from './city-map/city-map.component';
import {IndexComponent} from './index/index.component';
import {MapsComponent} from './maps/maps.component';
import {MapEditComponent} from './map/map.edit.component';
import {LoginComponent} from './login/login.component';
import {ROUTES} from './app.routes';

import mapsReducer from './maps/maps.reducer';
import {ServiceLocator} from "./service-locator.service";
import {MapComponent} from "./map/map.component";
import {MapItemComponent} from "./map-item/map-item.component";
import { DynamicFormComponent }         from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
    imports: [
        BrowserModule,
        StoreModule.provideStore({
            maps: mapsReducer
        }),
        HttpModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        CityMapComponent,
        CityItemDialogComponent,
        IndexComponent,
        LoginComponent,
        MapsComponent,
        MapComponent,
        MapEditComponent,
        MapItemComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
        // PageNotFoundComponent
    ],
    entryComponents: [
        CityItemDialogComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
    constructor(private injector: Injector) {
        ServiceLocator.injector = this.injector;
    }
}
