import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { DialogLayoutModule } from '../dialog-layout/dialog-layout.module';

import { YesNoDialogComponent } from './yes-no-dialog.component';

@NgModule({
  imports: [
    MatIconModule,
    DialogLayoutModule
  ],
  declarations: [
    YesNoDialogComponent
  ],
  exports: [
    YesNoDialogComponent
  ]
})
export class YesNoDialogModule { }
