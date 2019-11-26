import { Injectable } from '@angular/core';
//TODO-multiple-services
@Injectable({
  providedIn: 'root'
})
export class YoniService {
  num = 1;
  constructor() {
    console.log(`Yoni loaded ${Math.random() * 10000}`)
  }
}
