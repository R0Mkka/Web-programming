import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatIconModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { DialogLayoutModule } from '@shared/dialog-layout/dialog-layout.module';
import { CustomInputFieldModule } from '@shared/custom-input-field/custom-input-field.module';
import { CustomSelectFieldModule } from '@shared/custom-select-field/custom-select-field.module';
import { JournalRoutingModule } from './journal-routing.module';

import { WorksheetKeyboardController } from './components/journal-worksheet/journal-worksheet-keyboard.controller';

import { JournalComponent } from './components/journal/journal.component';
import { NewFolderDialogComponent } from './components/new-folder-dialog/new-folder-dialog.component';
import { JournalFoldersComponent } from './components/journal-folders/journal-folders.component';
import { JournalFolderCardComponent } from './components/journal-folder-card/journal-folder-card.component';
import { JournalListOfWorksheetsComponent } from './components/journal-list-of-worksheets/journal-list-of-worksheets.component';
import { JournalWorksheetComponent } from './components/journal-worksheet/journal-worksheet.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    DndModule,
    InnerPageModule,
    DialogLayoutModule,
    CustomInputFieldModule,
    CustomSelectFieldModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalComponent,
    NewFolderDialogComponent,
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
