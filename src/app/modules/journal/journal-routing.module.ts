import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FolderGuard } from '@guards/folder.guard';
import { FolderWorksheetGuard } from '@guards/folder-worksheet.guard';

import { JournalComponent } from './components/journal/journal.component';
import { JournalListOfWorksheetsComponent } from './components/journal-list-of-worksheets/journal-list-of-worksheets.component';
import { JournalWorksheetComponent } from './components/journal-worksheet/journal-worksheet.component';

const routes: Routes = [
  {
    path: '',
    component: JournalComponent
  },
  {
    path: ':folderId',
    component: JournalListOfWorksheetsComponent,
    canActivate: [FolderGuard],
    canActivateChild: [FolderWorksheetGuard],
    children: [
      { path: ':worksheetId', component: JournalWorksheetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
