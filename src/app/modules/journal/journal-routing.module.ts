import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JournalComponent } from './components/journal/journal.component';
import { JournalFoldersComponent } from './components/journal-folders/journal-folders.component';
import { JournalListOfWorksheetsComponent } from './components/journal-list-of-worksheets/journal-list-of-worksheets.component';
import { JournalWorksheetComponent } from './components/journal-worksheet/journal-worksheet.component';

const routes: Routes = [
  {
    path: '',
    component: JournalComponent,
    children: [
      { path: '', component: JournalFoldersComponent },
      {
        path: ':folderId',
        component: JournalListOfWorksheetsComponent,
        children: [
          { path: ':worksheetId', component: JournalWorksheetComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
