import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private httpBE: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('userToken');
  }
  registerInBE(credentials) {
    this.httpBE.post<any>('http://localhost:61925/api/account/register', credentials).subscribe(res => {
      this.authenticate(res);
    });
  }

  loginInBE(credentials) {
    this.httpBE.post<any>('http://localhost:61925/api/account/login', credentials).subscribe(res => {
      this.authenticate(res);
    });
  }

  logout() {
    localStorage.removeItem('userToken');
  }

  authenticate(res) {
    localStorage.setItem('userToken', res.token);

    this.router.navigate(['/']);
  }
}
