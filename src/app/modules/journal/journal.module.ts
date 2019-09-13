import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatTableModule, MatMenuModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { JournalRoutingModule } from './journal-routing.module';

import { TableWorksheetController } from './components/table-worksheet/table-worksheet.controller';

import { JournalComponent } from './components/journal/journal.component';
import { JournalFoldersComponent } from './components/journal-folders/journal-folders.component';
import { JournalFolderCardComponent } from './components/journal-folder-card/journal-folder-card.component';
import { JournalTableComponent } from './components/journal-table/journal-table.component';
import { TableWorksheetComponent } from './components/table-worksheet/table-worksheet.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTableModule,
    MatMenuModule,
    InlineSVGModule,
    InnerPageModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalComponent,
    JournalFoldersComponent,
    JournalFolderCardComponent,
    JournalTableComponent,
    TableWorksheetComponent
  ],
  providers: [
    TableWorksheetController
  ],
  exports: []
})
export class JournalModule { }
