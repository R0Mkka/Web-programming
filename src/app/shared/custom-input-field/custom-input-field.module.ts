import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomInputFieldComponent } from './custom-input-field.component';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
    CustomInputFieldComponent
  ],
  exports: [
    CustomInputFieldComponent
  ]
})
export class CustomInputFieldModule { }
