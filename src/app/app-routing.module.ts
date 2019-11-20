import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import {UsersResolver} from './core/users/users.resolver';
import {PermissionsGuard} from './core/permissions/permissions.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';
import {PermissionsLoader} from './core/permissions/permissions.loader';
import {AdminComponent} from './admin/admin.component';

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
    resolve: {users: UsersResolver}
  },
  {
    path:'not-authorized',
    component: NotAuthorizedComponent
  },
  {
    path:'admin',
    component: AdminComponent,
    //TODO-Loader use this for lazy loading include guard in app routing
    // canLoad: [PermissionsLoader],
    //TODO-Guard  include guard in app routing
    canActivate: [PermissionsGuard],
    //TODO-Resolve include resolver in app routing
  }


];

@NgModule({
  //TODO-lazy: use forRoot
  imports: [RouterModule.forRoot(routes)], // ! ROUTER use for root
  exports: [RouterModule]

})
export class AppRoutingModule {}
