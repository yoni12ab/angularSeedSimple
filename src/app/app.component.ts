import { Component } from '@angular/core';
import {UsersListFacade} from './users/users-list.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users$ = this.usersFacadeService.getUsers();
  constructor(private usersFacadeService: UsersListFacade) {}
}
