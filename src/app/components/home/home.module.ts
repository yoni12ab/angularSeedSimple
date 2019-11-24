import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  //TODO-lazy: dont forget to include the component to the module also
  declarations: [HomeComponent],
  //TODO-core: avoid declaring in providers array
  // if we will declare the service in provides
  // then the compiler will include the service even if we are not using it
  // to prove this include provides and search it in f12
  // providers: [UsersApiService]
  imports: [HomeRoutingModule, SharedModule]
})
export class HomeModule {}
