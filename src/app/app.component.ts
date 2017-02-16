import {Component, OnInit} from '@angular/core';
import {ROUTES_NAV} from './app.routes';
import {Router} from "@angular/router";
import {AuthGuard} from "./_guards/auth-guard.service";

require('./angular-material.layouts.global.scss');
require('./theme.global.scss');

@Component({
    selector: 'compass-app',
    templateUrl: './app.component.html',
    providers: [AuthGuard]
})
export class AppComponent implements OnInit {

    ROUTES_NAV = ROUTES_NAV;

    isLogin: boolean = true;

    constructor(private _router: Router) {

    }

    ngOnInit(): void {
        this._router.events.subscribe((url) => {
            this.isLogin = (url.url === '/login');
        });
    }


}
