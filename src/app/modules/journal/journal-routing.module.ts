import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FolderGuard } from '@guards/folder.guard';
import { FolderWorksheetGuard } from '@guards/folder-worksheet.guard';

import { DataResolve } from './services/data-resolve.service';
import { FolderResolver } from './services/folder.resolver';

import { JournalComponent } from './components/journal/journal.component';
import { JournalListOfWorksheetsComponent } from './components/journal-list-of-worksheets/journal-list-of-worksheets.component';
import { NoWorksheetSelectedComponent } from './components/no-worksheet-selected/no-worksheet-selected.component';
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
    resolve: {
      folderData: FolderResolver
    },
    children: [
      {
        path: '',
        component: NoWorksheetSelectedComponent
      },
      {
        path: ':worksheetId',
        component: JournalWorksheetComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
