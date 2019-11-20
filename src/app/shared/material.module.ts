import { NgModule } from '@angular/core';
import { MatTabsModule, MatSnackBarModule } from '@angular/material';

const importsExports = [MatTabsModule, MatSnackBarModule];
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
