import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { Page1Routing } from './page1-routing.module';
import { YoniService } from 'src/app/core/yoni.service';
import { YoniModule } from 'src/app/core/yoni.module';

@NgModule({
  declarations: [Page1Component],
  providers: [YoniService],
  imports: [CommonModule, Page1Routing, YoniModule]
})
export class Page1Module {}
