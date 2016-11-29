import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector   : 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model : User;

  constructor() {}

  onSubmit() {
    debugger
  }

  ngOnInit() {
    console.log('Login loaded');
  }
}
