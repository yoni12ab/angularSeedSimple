import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListModule } from "./components/users/users-list.module";
import { UsersResolver } from "./core/users/users.resolver";
import { PermissionsGuard } from "./core/permissions/permissions.guard";
import { NotAuthorizedComponent } from "./components/not-authorized/not-authorized.component";
import { PermissionsLoader } from "./core/permissions/permissions.loader";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    //TODO-lazy: use loadChildren
    loadChildren: () =>
      import("./components/home/home.module").then(m => m.HomeModule), // ! ROUTER use import thats downloads the module
    canActivate: [PermissionsGuard],
    resolve: { users: UsersResolver }
  },
  {
    path: "users",
    loadChildren: () =>
      import("./components/users/users-list.module").then(
        m => m.UsersListModule
      ),
    resolve: { users: UsersResolver }
  },
  {
    path: "page1",
    loadChildren: () =>
      import("./components/page1/page1.module").then(m => m.Page1Module),
    resolve: { users: UsersResolver }
  },
  {
    path: "not-authorized",
    component: NotAuthorizedComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    //TODO-Loader use this for lazy loading include guard in app routing
    // canLoad: [PermissionsLoader],
    //TODO-Guard  include guard in app routing
    canActivate: [PermissionsGuard]
    //TODO-Resolve include resolver in app routing
  }
];

@NgModule({
  //TODO-lazy: use forRoot
  imports: [RouterModule.forRoot(routes)], // ! ROUTER use for root
  exports: [RouterModule]
})
export class AppRoutingModule {}
