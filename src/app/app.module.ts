import {NgModule, Injector} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {CityMapComponent} from './city-map/city-map.component';
import {IndexComponent} from './index/index.component';
import {MapsComponent} from './maps/maps.component';
import {MapEditComponent} from './map/map.edit.component';
import {LoginComponent} from './login/login.component';
import {ROUTES} from './app.routes';

import mapsReducer from './maps/maps.reducer';
import {ServiceLocator} from "./service-locator.service";
import { DynamicFormComponent }         from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';
import {AuthGuard} from "./_guards/auth-guard.service";
import {AuthService} from "./_guards/auth.service";

import {ItemKindService} from './api/service/item-kind.service'
import {IosIconService} from './api/service/ios-icon.service'
import {AndroidIconService} from './api/service/android-icon.service'
import {RootService} from './api/service/root.service'
import {CityItemService} from './api/service/city-item.service'
import {MapService} from './api/service/map.service'
import {ServiceFactory} from "./api/service-factory.service";

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
        ReactiveFormsModule,
        FlexLayoutModule.forRoot()
    ],
    declarations: [
        AppComponent,
        CityMapComponent,
        IndexComponent,
        LoginComponent,
        MapsComponent,
        MapEditComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
        // PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [AuthGuard, AuthService,
        ServiceFactory,
        ItemKindService,
        IosIconService,
        AndroidIconService,
        RootService,
        CityItemService,
        MapService
    ]
})
export class AppModule {
    constructor(private injector: Injector) {
        ServiceLocator.injector = this.injector;
    }
}
