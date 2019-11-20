import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersRes } from '../core/users/users.model';
import { UsersState } from '../core/users/users.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersListFacade {
  constructor(private usersState: UsersState) {
    console.log('users facade loaded');
  }
  public getUsers(): Observable<User[]> {
    return this.usersState.getUsers();
  }
}
