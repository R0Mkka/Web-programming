import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule,
    InnerPageModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleTableComponent
  ],
  exports: []
})
export class ScheduleModule { }
