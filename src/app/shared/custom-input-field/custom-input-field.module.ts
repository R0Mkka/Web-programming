import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InlineSVGModule } from 'ng-inline-svg';

import { CustomInputFieldComponent } from './custom-input-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    InlineSVGModule
  ],
  declarations: [
    CustomInputFieldComponent
  ],
  exports: [
    CustomInputFieldComponent
  ]
})
export class CustomInputFieldModule { }
