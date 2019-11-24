import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './users.model';
import { Store, Action, ActionCreator } from '@ngrx/store';
import { AppState } from '../../store/app-state.model';
import * as UserActions from '../../store/users/user.actions';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable({
  providedIn: 'root'
})
export class UsersState {
  // we can replace store with simple behavior subject in one place
  // private users$ = new BehaviorSubject<User[]>(null);
  constructor(private store: Store<AppState>) {}
  public getUsers(): Observable<User[]> {
    //TODO-Store select action
    return this.store.select(state => state.users);
    // return this.users$.asObservable();
  }

  public setUsers(users: User[], action = UserActions.setUsers): void {
    //TODO-Store dispatch action
    this.store.dispatch(action({ users }));
    // this.users$.next(users);
  }

  public deleteUser(user: User): void {
    this.store.dispatch(UserActions.deleteUser({ user }));
  }
}
