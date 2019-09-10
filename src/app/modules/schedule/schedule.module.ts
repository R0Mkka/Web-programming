import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { CustomFlagModule } from '@shared/custom-flag/custom-flag.module';
import { CustomInputFieldModule } from '@shared/custom-input-field/custom-input-field.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

import { ScheduleService } from './services/schedule.service';

import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { ScheduleEditDialogComponent } from './components/schedule-edit-dialog/schedule-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InlineSVGModule,
    InnerPageModule,
    CustomFlagModule,
    CustomInputFieldModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleTableComponent,
    ScheduleEditDialogComponent
  ],
  providers: [
    ScheduleService
  ],
  exports: []
})
export class ScheduleModule { }
