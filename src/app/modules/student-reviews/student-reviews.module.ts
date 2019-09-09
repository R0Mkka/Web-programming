import { NgModule } from '@angular/core';

import { InnerPageModule } from '@shared/inner-page/inner-page.module';
import { StudentReviewsRoutingModule } from './student-reviews-routing.module';

import { StudentReviewsComponent } from './components/student-reviews/student-reviews.component';

@NgModule({
  imports: [
    InnerPageModule,
    StudentReviewsRoutingModule
  ],
  declarations: [
    StudentReviewsComponent
  ],
  exports: []
})
export class StudentReviewsModule { }
