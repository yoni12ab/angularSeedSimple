import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatCardModule
} from '@angular/material';

const importsExports = [
  MatTabsModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatCardModule
];
@NgModule({
  declarations: [],
  imports: [...importsExports],
  exports: [...importsExports]
})
export class MaterialModule {}
