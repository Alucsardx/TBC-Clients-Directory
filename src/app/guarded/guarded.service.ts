import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.router.navigate(['clients']);
    return false;
  }
}
