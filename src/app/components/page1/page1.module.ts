import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Page1Component } from "./page1.component";
import { Page1Routing } from "./page1-routing.module";

@NgModule({
  declarations: [Page1Component],
  imports: [CommonModule, Page1Routing]
})
export class Page1Module {}
