import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { CustomFlagComponent } from './custom-flag.component';

@NgModule({
  imports: [
    InlineSVGModule
  ],
  declarations: [
    CustomFlagComponent
  ],
  exports: [
    CustomFlagComponent
  ]
})
export class CustomFlagModule { }
