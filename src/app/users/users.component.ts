import { Component, OnInit } from '@angular/core';
import {UsersFacadeService} from './users-facade.service';
import {UsersApiService} from '../core/users/users-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users$ = this.usersFacadeService.getUsers();
  constructor(private usersFacadeService: UsersFacadeService) { }

  ngOnInit() {
  }

}
