import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { Page2Routing } from './page2-routing.module';
import { YoniService } from 'src/app/core/yoni.service';
import { YoniModule } from 'src/app/core/yoni.module';

@NgModule({
  declarations: [Page2Component],
  providers: [YoniService],
  imports: [Page2Routing, CommonModule, YoniModule]
})
export class Page2Module {}
