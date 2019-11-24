import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from './users-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersListComponent
  }
];

@NgModule({
  declarations: [],
  //TODO-lazy: use forChild
  imports: [RouterModule.forChild(routes)], // ! ROUTER use for child
  exports: [RouterModule]
})
export class UsersListRoutingModule {}
