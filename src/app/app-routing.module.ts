import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import {UsersResolverService} from './core/users/users-resolver.service';
import {PermissionsGuardService} from './core/permissions-guard.service';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    //TODO-lazy: use loadChildren
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), // ! ROUTER use import thats downloads the module
    canActivate: [PermissionsGuardService],
    resolve: {users: UsersResolverService}
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    //TODO-Guard  include guard in app routing
    canActivate: [PermissionsGuardService],
    //TODO-Resolve include resolver in app routing
    resolve: {users: UsersResolverService}
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
