import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { SubjectsRoutingModule } from './subjects-routing.module';

import { SubjectsComponent } from './components/subjects/subjects.component';
import { SingleSubjectComponent } from './components/single-subject/single-subject.component';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { PlanComponent } from './components/plan/plan.component';

@NgModule({
  imports: [
    CommonModule,
    InnerPageModule,
    SubjectsRoutingModule
  ],
  declarations: [
    SubjectsComponent,
    SingleSubjectComponent,
    SubjectCardComponent,
    PlanComponent
  ],
  exports: []
})
export class SubjectsModule { }
