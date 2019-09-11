import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JournalComponent } from './components/journal/journal.component';
import { TableWorksheetComponent } from './components/table-worksheet/table-worksheet.component';

const routes: Routes = [
  {
    path: '',
    component: JournalComponent,
    children: [
      { path: ':worksheetId', component: TableWorksheetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
