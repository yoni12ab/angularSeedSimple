import { Component } from '@angular/core';
import {UsersListFacade} from './components/users/users-list.facade';
// import {YoniService} from './core/yoni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users$ = this.usersFacadeService.getUsers();
  constructor(private usersFacadeService: UsersListFacade,
  //            private yoniService: YoniService
  ) {}
}
