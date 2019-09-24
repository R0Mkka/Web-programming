import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatIconModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { DialogLayoutModule } from '@shared/dialog-layout/dialog-layout.module';
import { CustomInputFieldModule } from '@shared/custom-input-field/custom-input-field.module';
import { CustomSelectFieldModule } from '@shared/custom-select-field/custom-select-field.module';
import { DoubleStateFieldModule } from '@shared/double-state-field/double-state-field.module';
import { JournalRoutingModule } from './journal-routing.module';

import { WorksheetKeyboardController } from './components/journal-worksheet/journal-worksheet-keyboard.controller';
import { FolderResolver } from './services/folder.resolver';
import { DataResolve } from './services/data-resolve.service';

import { JournalComponent } from './components/journal/journal.component';
import { NewFolderDialogComponent } from './components/new-folder-dialog/new-folder-dialog.component';
import { JournalFoldersComponent } from './components/journal-folders/journal-folders.component';
import { JournalFolderCardComponent } from './components/journal-folder-card/journal-folder-card.component';
import { JournalListOfWorksheetsComponent } from './components/journal-list-of-worksheets/journal-list-of-worksheets.component';
import { NoWorksheetSelectedComponent } from './components/no-worksheet-selected/no-worksheet-selected.component';
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
    DoubleStateFieldModule,
    JournalRoutingModule
  ],
  declarations: [
    JournalComponent,
    NewFolderDialogComponent,
    JournalFoldersComponent,
    JournalFolderCardComponent,
    JournalListOfWorksheetsComponent,
    NoWorksheetSelectedComponent,
    JournalWorksheetComponent
  ],
  providers: [
    WorksheetKeyboardController,
    FolderResolver,
    DataResolve
  ],
  exports: []
})
export class JournalModule { }
