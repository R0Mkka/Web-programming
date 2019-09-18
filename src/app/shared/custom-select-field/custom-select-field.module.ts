import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatTooltipModule, MatSelectModule } from '@angular/material';

import { CustomSelectFieldComponent } from './custom-select-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: [
    CustomSelectFieldComponent
  ],
  exports: [
    CustomSelectFieldComponent
  ]
})
export class CustomSelectFieldModule { }
