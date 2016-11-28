import { Component } from '@angular/core';
import { ROUTES_NAV } from './app.routes';

require('./angular-material.layouts.global.scss');
require('./theme.global.scss');

@Component({
  selector   : 'compass-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  ROUTES_NAV = ROUTES_NAV;
}
