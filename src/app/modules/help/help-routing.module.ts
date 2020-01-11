import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './components/help/help.component';
import { HelpSectionsComponent } from './components/help-sections/help-sections.component';

import { CreateFolderComponent } from './journal/create-folder/create-folder.component';
import { RemoveFolderComponent } from './journal/remove-folder/remove-folder.component';
import { EditFolderNameComponent } from './journal/edit-folder-name/edit-folder-name.component';
import { EditFolderAccessTypeComponent } from './journal/edit-folder-access-type/edit-folder-access-type.component';
import { WorkInsideFolderComponent } from './journal/work-inside-folder/work-inside-folder.component';
import { AddStudentReviewComponent } from './student-reviews/add/add-student-review.component';
import { RemoveStudentReviewComponent } from './student-reviews/remove/remove-student-review.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      { path: '', component: HelpSectionsComponent },
      { path: 'create-folder', component: CreateFolderComponent },
      { path: 'remove-folder', component: RemoveFolderComponent },
      { path: 'edit-folder-name', component: EditFolderNameComponent },
      { path: 'edit-folder-access-type', component: EditFolderAccessTypeComponent },
      { path: 'work-inside-folder', component: WorkInsideFolderComponent },
      { path: 'add-student-review', component: AddStudentReviewComponent },
      { path: 'remove-student-review', component: RemoveStudentReviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
