import { Component, OnInit } from '@angular/core';
import { UsersListFacade } from './users-list.facade';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$ = this.usersFacadeService.getUsers();
  constructor(private usersFacadeService: UsersListFacade) {}

  ngOnInit() {}
}
