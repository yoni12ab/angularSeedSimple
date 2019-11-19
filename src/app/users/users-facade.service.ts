import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {

  constructor() {
    console.log('users facade loaded');
  }
}
