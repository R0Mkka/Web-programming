import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentReviewsComponent } from './components/student-reviews/student-reviews.component';

const routes: Routes = [
  { path: '', component: StudentReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentReviewsRoutingModule { }
