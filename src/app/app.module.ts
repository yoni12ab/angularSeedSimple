import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { AdminComponent } from './components/admin/admin.component';
import { usersReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { YoniService } from './core/yoni.service';
import { YoniModule } from './core/yoni.module';
@NgModule({
  declarations: [AppComponent, NotAuthorizedComponent, AdminComponent],
  imports: [
    SharedModule,
    //TODO-Store set store
    StoreModule.forRoot({ users: usersReducer }),
    //TODO-Store dev tools
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      // logOnly: environment.production // Restrict extension to log-only mode
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    // YoniModule
  ],
  providers: [
    //TODO-multiple-services
    //YoniService,
    { provide: LocationStrategy, useClass: HashLocationStrategy } //TODO-ROUTER add this for # in url
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
