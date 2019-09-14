import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './components/help/help.component';
import { HelpSectionsComponent } from './components/help-sections/help-sections.component';

import { AddStudentReviewComponent } from './student-reviews/add/add-student-review.component';
import { RemoveStudentReviewComponent } from './student-reviews/remove/remove-student-review.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      { path: '', component: HelpSectionsComponent },
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
