import {Injectable} from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UsersApiService} from './users-api.service';
import {UsersRes} from '../../models/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<Observable<UsersRes>> {
  //TODO-Resolve
  constructor(private usersApi: UsersApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersRes> {
    console.log('resolver getUsers');
    return this.usersApi.getUsers();
  }
}


