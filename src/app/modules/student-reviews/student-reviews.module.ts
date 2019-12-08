import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { DialogLayoutModule } from '@shared/dialog-layout/dialog-layout.module';
import { CustomInputFieldModule } from '@shared/custom-input-field/custom-input-field.module';
import { YesNoDialogModule } from '@shared/yes-no-dialog/yes-no-dialog.module';
import { StudentReviewsRoutingModule } from './student-reviews-routing.module';

import { StudentReviewsComponent } from './components/student-reviews/student-reviews.component';
import { StudentReviewCardComponent } from './components/student-review-card/student-review-card.component';
import { NewStudentReviewDialogComponent } from './components/new-student-review-dialog/new-student-review-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    InnerPageModule,
    DialogLayoutModule,
    CustomInputFieldModule,
    YesNoDialogModule,
    StudentReviewsRoutingModule
  ],
  declarations: [
    StudentReviewsComponent,
    StudentReviewCardComponent,
    NewStudentReviewDialogComponent
  ],
  exports: []
})
export class StudentReviewsModule { }
