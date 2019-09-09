import { NgModule } from '@angular/core';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleComponent } from './components/schedule/schedule.component';

@NgModule({
  imports: [
    InnerPageModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent
  ],
  exports: []
})
export class ScheduleModule { }
