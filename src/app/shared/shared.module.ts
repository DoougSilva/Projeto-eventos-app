import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './cofirmation-dialog/cofirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ChamberPipe } from './pipes/chamber.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ChamberPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    ChamberPipe,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
