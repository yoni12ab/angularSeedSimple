import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersRes } from '../../core/users/users.model';
import { UsersState } from '../../core/users/users.state';
import { map } from 'rxjs/operators';
import {UsersFacade} from '../../core/users/users.facade';

@Injectable({
  providedIn: 'root'
})
export class UsersListFacade {
  constructor(private usersFacade: UsersFacade) {
    console.log('users facade loaded');
  }
  public getUsers(): Observable<User[]> {
    return this.usersFacade.getUsers();
  }

  public deleteUser(user: User): void {
    this.usersFacade.deleteUser(user);
  }
}
