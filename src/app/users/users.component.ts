import { Component, OnInit } from '@angular/core';
import {UsersFacadeService} from './users-facade.service';
import {UsersApiService} from '../core/users-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersFacadeService: UsersFacadeService,
              private usersApiService: UsersApiService) { }

  ngOnInit() {
  }

}
