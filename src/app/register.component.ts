import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  regForm;

  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.regForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register() {
    console.log(this.regForm);
  }
}
