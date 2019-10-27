import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { DialogLayoutModule } from '@shared/dialog-layout/dialog-layout.module';
import { CustomInputFieldModule } from '@shared/custom-input-field/custom-input-field.module';
import { SubjectsRoutingModule } from './subjects-routing.module';

import { SubjectsComponent } from './components/subjects/subjects.component';
import { SingleSubjectComponent } from './components/single-subject/single-subject.component';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { PlanComponent } from './components/plan/plan.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { LabsComponent } from './components/labs/labs.component';
import { TestsComponent } from './components/tests/tests.component';
import { ExamsComponent } from './components/exams/exams.component';
import { NewSubjectDialogComponent } from './components/new-subject-dialog/new-subject-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    InnerPageModule,
    DialogLayoutModule,
    CustomInputFieldModule,
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
    ExamsComponent,
    NewSubjectDialogComponent
  ],
  exports: []
})
export class SubjectsModule { }
