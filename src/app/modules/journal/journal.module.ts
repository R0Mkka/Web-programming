import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatTableModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { JournalRoutingModule } from './journal-routing.module';

import { JournalComponent } from './components/journal/journal.component';
import { JournalTableComponent } from './components/journal-table/journal-table.component';
import { TableWorksheetComponent } from './components/table-worksheet/table-worksheet.component';

import { TableWorksheetController } from './components/table-worksheet/table-worksheet.controller';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTableModule,
    InlineSVGModule,
    InnerPageModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalComponent,
    JournalTableComponent,
    TableWorksheetComponent
  ],
  providers: [
    TableWorksheetController
  ],
  exports: []
})
export class JournalModule { }
