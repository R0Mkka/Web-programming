import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  public readonly remove: EventEmitter<void> = new EventEmitter<void>();

  public readonly fields = StudentReviewFields;

  public removeReview(): void {
    this.remove.emit();
  }
}
