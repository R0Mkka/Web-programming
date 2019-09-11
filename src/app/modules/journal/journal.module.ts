import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { JournalRoutingModule } from './journal-routing.module';

import { JournalComponent } from './components/journal/journal.component';
import { JournalTableComponent } from './components/journal-table/journal-table.component';
import { TableWorksheetComponent } from './components/table-worksheet/table-worksheet.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    InlineSVGModule,
    InnerPageModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalComponent,
    JournalTableComponent,
    TableWorksheetComponent
  ],
  exports: []
})
export class JournalModule { }
