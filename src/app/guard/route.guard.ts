import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private router: Router, private auth$: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.auth$.isLoggedIn && this.auth$.isAuthenticated) {
      this.router.navigate(['/session/signin']);
      return false;
    }
    return true;
  }
}
