import { Injectable } from '@angular/core';

@Injectable()
export class RoniService {
  constructor() {
    console.log(`Roni loaded ${Math.random() * 10000}`);
  }
}
