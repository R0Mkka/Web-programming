import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IStudentReview, StudentReviewFields } from '@models/review.models';

@Component({
  selector: 'app-student-review-card',
  templateUrl: './student-review-card.component.html',
  styleUrls: ['./student-review-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentReviewCardComponent {
  @Input()
  public readonly review: IStudentReview;

  public readonly fields = StudentReviewFields;
}
