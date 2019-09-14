import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { DialogService } from '@shared/dialog/dialog.service';

import { NewStudentReviewDialogComponent } from '../new-student-review-dialog/new-student-review-dialog.component';

import { IStudentReview } from '@models/review.models';
import { studentReviews } from './student-reviews.config';
import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';

@Component({
  selector: 'app-student-reviews',
  templateUrl: './student-reviews.component.html',
  styleUrls: ['./student-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentReviewsComponent {
  public readonly studentReviews: IStudentReview[] = studentReviews;

  constructor(
    private readonly dialogService: DialogService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public openReviewAddingDialog(): void {
    const dialogRef: DialogOverlayRef = this.dialogService.open(NewStudentReviewDialogComponent);

    const tempSubscription: Subscription =  dialogRef.afterClosed$
      .subscribe((studentReview: IStudentReview) => {
        this.studentReviews.push(studentReview);

        this.cdRef.markForCheck();

        tempSubscription.unsubscribe();
      });
  }
}
