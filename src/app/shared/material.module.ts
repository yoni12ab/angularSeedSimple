import { NgModule } from '@angular/core';
import { MatTabsModule, MatSnackBarModule, MatSlideToggleModule } from '@angular/material';

const importsExports = [MatTabsModule, MatSnackBarModule, MatSlideToggleModule];
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
