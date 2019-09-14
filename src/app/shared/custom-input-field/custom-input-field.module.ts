import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatIconModule } from '@angular/material';

import { CustomInputFieldComponent } from './custom-input-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule
  ],
  declarations: [
    CustomInputFieldComponent
  ],
  exports: [
    CustomInputFieldComponent
  ]
})
export class CustomInputFieldModule { }
