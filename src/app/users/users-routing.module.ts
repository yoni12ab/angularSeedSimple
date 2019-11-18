import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)], // ! ROUTER use for child
  exports: [RouterModule]
})
export class UsersRoutingModule {}
