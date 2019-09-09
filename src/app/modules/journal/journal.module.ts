import { NgModule } from '@angular/core';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { JournalRoutingModule } from './journal-routing.module';

import { JournalComponent } from './components/journal/journal.component';

@NgModule({
  imports: [
    InnerPageModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalComponent
  ],
  exports: []
})
export class JournalModule { }
