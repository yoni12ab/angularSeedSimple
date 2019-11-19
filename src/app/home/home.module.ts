import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  //TODO-lazy: dont forget to include the component to the module also
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule]
})
export class HomeModule {}
