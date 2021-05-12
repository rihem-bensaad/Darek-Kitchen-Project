import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map, tap, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean  {

    if (!this.authenticationService.isloggedIn()) {
      var x = this.authenticationService.isloggedIn()
      console.log(x,"xxxxxxxxxxxxxxxxxxxxxxx");

          alert('You are not allowed to view this page');
          this.router.navigate(['/login']);
            return false;
        }
        return true;
  }
}
