import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm;

  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
