import {Injectable} from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UsersApi} from './users.api';
import {UsersRes} from './users.model';
import {tap} from 'rxjs/operators';
import {UsersState} from './users.state';


@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<Observable<UsersRes>> {
  //TODO-Resolve
  constructor(private usersApi: UsersApi,
              private usersState: UsersState) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersRes> {
    console.log('resolver getUsers');
    return this.usersApi.getUsers()
        .pipe(tap((usersRes: UsersRes) => {
          this.usersState.setUsers(usersRes)

        }) );
  }
}


