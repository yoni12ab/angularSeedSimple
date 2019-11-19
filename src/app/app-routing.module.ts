import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import {UsersResolver} from './core/users.resolver';
import {PermissionsGuard} from './core/permissions.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    //TODO-lazy: use loadChildren
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), // ! ROUTER use import thats downloads the module
    canActivate: [PermissionsGuard],
    resolve: {users: UsersResolver}
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    //TODO-Guard  include guard in app routing
    canActivate: [PermissionsGuard],
    //TODO-Resolve include resolver in app routing
    resolve: {users: UsersResolver}
  },
  {
    path:'not-authorized',
    component: NotAuthorizedComponent
  }
];

@NgModule({
  //TODO-lazy: use forRoot
  imports: [RouterModule.forRoot(routes)], // ! ROUTER use for root
  exports: [RouterModule]

})
export class AppRoutingModule {}
