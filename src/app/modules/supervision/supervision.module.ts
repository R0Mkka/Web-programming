import { NgModule } from '@angular/core';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { SupervisionRoutingModule } from './supervision-routing.module';

import { SupervisionComponent } from './components/supervision/supervision.component';

@NgModule({
  imports: [
    InnerPageModule,
    SupervisionRoutingModule
  ],
  declarations: [
    SupervisionComponent
  ],
  exports: []
})
export class SupervisionModule { }
