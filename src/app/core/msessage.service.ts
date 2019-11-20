import {Injectable} from '@angular/core';
import {PermissionsApi} from './permissions/permissions.api';
import {MatSnackBar} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {

  }

  public show(msg: string) {
    return this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: ['app-bgn-success']
    });
  }

  public error(msg: string) {
    return this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: ['app-bgn-error']
    });
  }
}
