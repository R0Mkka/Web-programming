import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerModule } from '../spinner/spinner.module';

import { InnerPageComponent } from './inner-page.component';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule
  ],
  declarations: [
    InnerPageComponent
  ],
  exports: [
    InnerPageComponent
  ]
})
export class InnerPageModule { }
