import { Injectable } from '@angular/core';
//TODO-multiple-services
@Injectable({
  providedIn: 'root'
})
export class YoniService {

  constructor() {
    console.log('Yoni loaded');
  }
}
