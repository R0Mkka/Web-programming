import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { CustomFlagComponent } from './custom-flag.component';

@NgModule({
  imports: [
    MatIconModule
  ],
  declarations: [
    CustomFlagComponent
  ],
  exports: [
    CustomFlagComponent
  ]
})
export class CustomFlagModule { }
