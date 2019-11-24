import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [SharedModule, UsersListRoutingModule]
})
export class UsersListModule {}
