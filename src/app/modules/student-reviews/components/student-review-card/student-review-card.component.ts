import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { YesNoDialogService } from '@services/yes-no-dialog.service';

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

  constructor(
    private yesNoDialog: YesNoDialogService,
  ) {}

  public removeReview(): void {
    this.yesNoDialog.open({
      htmlMessage: `
        Вы действительно хотите удалить отзыв?
        <br />
        Восстановить данные будет невозможно.
      `,
      onYes: () => {
        this.remove.emit();

        this.yesNoDialog.close();
      },
    });
  }
}
