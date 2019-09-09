import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent } from './components/subjects/subjects.component';
import { SingleSubjectComponent } from './components/single-subject/single-subject.component';
import { PlanComponent } from './components/plan/plan.component';

const routes: Routes = [
  { path: '', component: SubjectsComponent },
  {
    path: ':subject',
    component: SingleSubjectComponent,
    children: [
      { path: 'plan', component: PlanComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
