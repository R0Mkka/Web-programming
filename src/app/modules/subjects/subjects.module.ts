import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { SubjectsRoutingModule } from './subjects-routing.module';

import { SubjectsComponent } from './components/subjects/subjects.component';
import { SingleSubjectComponent } from './components/single-subject/single-subject.component';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { PlanComponent } from './components/plan/plan.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { LabsComponent } from './components/labs/labs.component';
import { TestsComponent } from './components/tests/tests.component';
import { ExamsComponent } from './components/exams/exams.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    InnerPageModule,
    SubjectsRoutingModule
  ],
  declarations: [
    SubjectsComponent,
    SingleSubjectComponent,
    SubjectCardComponent,
    PlanComponent,
    LecturesComponent,
    LabsComponent,
    TestsComponent,
    ExamsComponent
  ],
  exports: []
})
export class SubjectsModule { }
