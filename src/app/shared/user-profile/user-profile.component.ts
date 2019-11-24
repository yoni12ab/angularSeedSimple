import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { User } from 'src/app/core/users/users.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
  @Input() public user: User;
  @Output() public deleteUser = new EventEmitter<User>();
  constructor() {}

  ngOnInit() {}

  deleteUserFunc(user: User):void{
    this.deleteUser && this.deleteUser.emit(user);
  }

}
