import { NgModule } from '@angular/core';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { HelpRoutingModule } from './help-routing.module';

import { HelpComponent } from './components/help/help.component';

@NgModule({
  imports: [
    InnerPageModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent
  ],
  exports: []
})
export class HelpModule { }
