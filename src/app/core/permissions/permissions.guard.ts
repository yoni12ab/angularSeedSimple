import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {PermissionsApi} from './permissions.api';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private permissionsApi: PermissionsApi, private router: Router){

  }
  //TODO-Guard
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean| UrlTree> | boolean {
    console.log('canActivate');
    return this.permissionsApi.isPermitted().pipe(map(isAllowed => isAllowed || this.router.parseUrl('not-authorized') ));
  }


}
