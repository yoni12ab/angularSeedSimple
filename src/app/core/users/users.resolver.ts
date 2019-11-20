import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { UsersApi } from './users.api';
import { UsersRes, User } from './users.model';
import { tap } from 'rxjs/operators';
import { UsersState } from './users.state';
import { UsersFacade } from './users.facade';
import * as UserActions from '../../store/users/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<Observable<User[]>> {
  //TODO-Resolve
  constructor(private usersFacade: UsersFacade) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    console.log('resolver getUsers');
    return this.usersFacade.fetchUsers().pipe(
      tap((users: User[]) => {
        this.usersFacade.setUsers(users, UserActions.setUsersAfterFetch);
      })
    );
  }
}
