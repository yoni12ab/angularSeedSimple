import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, share, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {PermissionsModel} from './permissions.model';

@Injectable({
  //TODO-core: define services in provide in and not in providers array so the compiler can tree sake them
  providedIn: 'root'
})
export class PermissionsApi {

  constructor(private router: Router){

  }

  public isPermitted(): Observable<boolean>{
    return this.getPermissions().pipe(map(per=> per.isAllowed))
  }

  public getPermissions(): Observable<PermissionsModel> {
   return of(this.getFakePermissions());
  }


  private getFakePermissions(): PermissionsModel {
    const currNav = this.router.getCurrentNavigation();

    if(currNav.extras && currNav.extras.state  && currNav.extras.state.yoni){
      return {isAllowed: false};
    }

    return {isAllowed: true};
  }
}
