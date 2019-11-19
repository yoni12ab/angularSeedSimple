import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: '',
    //TODO-lazy: use loadChildren
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) // ! ROUTER use import thats downloads the module
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  //TODO-lazy: use forRoot
  imports: [RouterModule.forRoot(routes)], // ! ROUTER use for root
  exports: [RouterModule]
})
export class AppRoutingModule {}
