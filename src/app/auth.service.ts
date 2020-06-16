import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private httpBE: HttpClient) { }

  registerInBE(credentials) {
    this.httpBE.post<any>('http://localhost:61925/api/account', credentials).subscribe(res => {
      localStorage.setItem('userToken', res.token);
    });
  }
}
