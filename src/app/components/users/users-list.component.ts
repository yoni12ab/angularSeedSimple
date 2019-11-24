import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersListFacade} from './users-list.facade';
import {User} from '../../core/users/users.model';
import {YoniService} from '../../core/yoni.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //TODO-multiple-services
  // providers:[YoniService]
})
export class UsersListComponent implements OnInit {
  public users$ = this.usersFacadeService.getUsers();
  public yoni = 9;
  constructor(private usersFacadeService: UsersListFacade, private yoniService: YoniService) {

  }

  ngOnInit() {
    //TODO-unsubscribe
    // this.users$
    //   .subscribe(c=> {
    //     console.log(`subscribe ${Math.random() * 10000}`)
    //     this.yoni = 10;
    //   }  )
  }

  deleteUserFunc(user: User){
    this.usersFacadeService.deleteUser(user);
  }
}
