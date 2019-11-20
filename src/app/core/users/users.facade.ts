import { Injectable } from '@angular/core';
import { UsersApi } from './users.api';
import { UsersState } from './users.state';
import { Observable } from 'rxjs';
import { User } from './users.model';
import { map } from 'rxjs/operators';
import { setUsers } from '../../store/users/user.actions';

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  constructor(private usersApi: UsersApi, private usersState: UsersState) {}

  public fetchUsers(): Observable<User[]> {
    return this.usersApi.fetchUsers().pipe(map(res => res.data));
  }

  public getUsers(): Observable<User[]> {
    return this.usersState.getUsers();
  }

  public setUsers(users: User[], storeAction?): void {
    this.usersState.setUsers(users, storeAction);
  }
}
