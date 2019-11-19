import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

const importsExports = [MatTabsModule];
@NgModule({
  declarations: [],
  imports: [
    ...importsExports
  ],
  exports: [
    ...importsExports
  ]
})
export class MaterialModule { }
