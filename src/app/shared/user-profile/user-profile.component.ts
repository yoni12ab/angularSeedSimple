import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/users/users.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() public user: User;
  constructor() {}

  ngOnInit() {}
}
