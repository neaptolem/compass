import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CityMapComponent } from './city-map.component';
import { CityItemFormComponent } from './city-item-form.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ModalModule
    ],
    declarations: [
        AppComponent,
        CityMapComponent,
        CityItemFormComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
