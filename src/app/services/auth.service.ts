import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public setUserLogin(userData) {
    sessionStorage.setItem('username', userData.username);
  }

  public verifyUser(userData) {
    this.setUserLogin(userData);
    return true;
  }
}
