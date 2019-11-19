import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {PermissionsModel} from '../models/permissions.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuardService implements CanActivate {
  constructor(private router: Router){

  }
  //TODO-Guard
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean| UrlTree> | boolean {
    console.log('PermissionsGuard timer 1000 and true');
    return timer(1000).pipe(
      map(_ => this.getFakePermissions()),
      map(perm => perm.isAllowed || this.router.parseUrl('/not-authorized')));
  }

  private getFakePermissions(): PermissionsModel {
    return {isAllowed: !location.href.includes('yoni')};
  }

}
