import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerPageComponent } from './inner-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InnerPageComponent
  ],
  exports: [
    InnerPageComponent
  ]
})
export class InnerPageModule { }
