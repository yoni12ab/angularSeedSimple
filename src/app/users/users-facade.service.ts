import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User, UsersRes} from '../models/users.model';
import {UsersStateService} from '../core/users/users-state.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {

  constructor(private usersState: UsersStateService) {
    console.log('users facade loaded');
  }
  public getUsers(): Observable<UsersRes>{
    return this.usersState.getUsers()
      .pipe(map(usersRes=> this.handleUsers(usersRes)));
  }

  private handleUsers(usersRes: UsersRes): UsersRes{
    const usersCopy = {...usersRes};
    usersCopy && usersCopy.data.forEach((user:User) => user.firstName += 'Yoni' );
    return usersCopy
  }
}
