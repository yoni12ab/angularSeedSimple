import {Injectable} from '@angular/core';

import {
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PermissionsApi} from './permissions.api';
import {MessageService} from '../msessage.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsLoader implements CanLoad {

  constructor(private permissionsApi: PermissionsApi, private messageService: MessageService) {

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.permissionsApi.isPermitted().pipe(tap(isAllowed => {
        !isAllowed && this.messageService.error('Not allowed')
      }
    ));
  }


}
