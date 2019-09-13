import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatTableModule, MatMenuModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { JournalRoutingModule } from './journal-routing.module';

import { WorksheetKeyboardController } from './components/journal-worksheet/journal-worksheet-keyboard.controller';

import { JournalComponent } from './components/journal/journal.component';
import { JournalFoldersComponent } from './components/journal-folders/journal-folders.component';
import { JournalFolderCardComponent } from './components/journal-folder-card/journal-folder-card.component';
import { JournalListOfWorksheetsComponent } from './components/journal-list-of-worksheets/journal-list-of-worksheets.component';
import { JournalWorksheetComponent } from './components/journal-worksheet/journal-worksheet.component';

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
    JournalListOfWorksheetsComponent,
    JournalWorksheetComponent
  ],
  providers: [
    WorksheetKeyboardController
  ],
  exports: []
})
export class JournalModule { }
