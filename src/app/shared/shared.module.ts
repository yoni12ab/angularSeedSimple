import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
//TODO-shared: try use only components because services will be imported multiple times
// if you need service you it from core

//TODO-shared: import array will not work in lazy loading
// const importArr = [UserProfileComponent];

@NgModule({
  providers:[
    //TODO-lazy: avoid using services here
  ],
  declarations: [UserProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    UserProfileComponent,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
