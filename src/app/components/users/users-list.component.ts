import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { UsersListFacade } from './users-list.facade';
import { User } from '../../core/users/users.model';
import { YoniService } from '../../core/yoni.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //TODO-multiple-services
  // providers:[YoniService]
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users$ = this.usersFacadeService.getUsers();
  private destroy$ = new Subject();
  public yoni = 9;
  constructor(
    private usersFacadeService: UsersListFacade
  ) //   private yoniService: YoniService
  {}

  ngOnInit() {
    //TODO-unsubscribe
    this.users$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.subFunc.bind(this));
  }

  subFunc() {
    console.log(`subscribe ${Math.random() * 10000}`);
    this.yoni = 10;
  }

  deleteUserFunc(user: User) {
    this.usersFacadeService.deleteUser(user);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
