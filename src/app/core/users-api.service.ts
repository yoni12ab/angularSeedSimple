import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersRes} from '../models/users.model';
import {share, shareReplay} from 'rxjs/operators';

@Injectable({
  //TODO-core: define services in provide in and not in providers array so the compiler can tree sake them
  providedIn: 'root'
})
export class UsersApiService {
  //https://n161.tech/t/dummyapi/documentation/
  private BASE_API = 'https://n161.tech/api/dummyapi';
  private httpReq = this.http.get<UsersRes>(`${this.BASE_API}/user?limit=10&page=1`).pipe(shareReplay());

  constructor(private http: HttpClient) {
    console.log('users api loaded');
  }

  public getUsers(): Observable<UsersRes> {
   return this.httpReq;
  }
}
