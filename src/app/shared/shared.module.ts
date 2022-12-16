import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ChamberPipe } from './pipes/chamber.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ChamberPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    ChamberPipe
  ]
})
export class SharedModule { }
