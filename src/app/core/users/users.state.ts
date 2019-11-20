import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UsersRes} from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersState {
  private users$ = new BehaviorSubject<UsersRes>(null);

  public getUsers(): Observable<UsersRes>{
    return this.users$.asObservable();
  }

  public setUsers(value: UsersRes): void{
    return this.users$.next(value);
  }
}
