import { Injectable } from '@angular/core';
import { UserResponse } from './interfaces/user-response';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private jwtHelper = new JwtHelperService();
  
  public get getToken(): string {
    return localStorage.token || sessionStorage.token || null;
  }

  public get isLoggedIn(): boolean {
    return !!this.getToken;
  }

  public get isAuthenticated(): boolean {
    return this.jwtHelper.isTokenExpired(this.getToken);
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
  }

  public setUser(user: UserResponse) {
    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    return JSON.stringify(
      localStorage.getItem('user') || sessionStorage.getItem('user')
    );
  }

  public logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  }
}
