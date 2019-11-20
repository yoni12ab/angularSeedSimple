import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, NotAuthorizedComponent, AdminComponent],
  imports: [
    SharedModule,
    BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, //TODO-ROUTER add this for # in url
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
