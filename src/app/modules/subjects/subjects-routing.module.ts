import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectGuard } from '@guards/subject.guard';

import { SubjectsComponent } from './components/subjects/subjects.component';
import { SingleSubjectComponent } from './components/single-subject/single-subject.component';
import { PlanComponent } from './components/plan/plan.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { LabsComponent } from './components/labs/labs.component';
import { TestsComponent } from './components/tests/tests.component';
import { ExamsComponent } from './components/exams/exams.component';

import { PATHS } from './subjects.config';

const routes: Routes = [
  { path: '', component: SubjectsComponent },
  {
    path: ':subject',
    // canActivate: [SubjectGuard],
    pathMatch: 'full',
    redirectTo: ':subject/plan'
  },
  {
    path: ':subject',
    // canActivate: [SubjectGuard],
    component: SingleSubjectComponent,
    children: [
      { path: PATHS.PLAN, component: PlanComponent },
      { path: PATHS.LECTURES, component: LecturesComponent },
      { path: PATHS.LABS, component: LabsComponent },
      { path: PATHS.TESTS, component: TestsComponent },
      { path: PATHS.EXAMS, component: ExamsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
