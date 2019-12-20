import { Injectable } from '@angular/core';
//TODO-multiple-services
@Injectable()
export class YoniService {
  id = Math.random() * 10000;
  constructor() {
    console.log(`Yoni loaded ${this.id}`);
  }

  public log(): void {
    //console.log(`Yoni id = ${this.id}`);
  }
}
