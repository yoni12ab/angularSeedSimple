import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersListFacade} from './users-list.facade';
import {User} from '../../core/users/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  public users$ = this.usersFacadeService.getUsers();
  constructor(private usersFacadeService: UsersListFacade) {}

  ngOnInit() {}

  deleteUserFunc(user: User){
    this.usersFacadeService.deleteUser(user);
  }
}
