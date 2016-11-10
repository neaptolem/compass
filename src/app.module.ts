import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import AppComponent from './screens/app/app.component';
import IndexComponent from './screens/index/index.component';
import MapsComponent from './screens/maps/maps.component';

import mapsReducer from './screens/maps/maps.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      maps: mapsReducer
    }),
    RouterModule.forRoot([{
      path: '',
      component: IndexComponent
    },
    {
      path: 'maps',
      component: MapsComponent
    }])
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    IndexComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
