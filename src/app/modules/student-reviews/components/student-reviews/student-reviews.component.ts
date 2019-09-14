import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DialogService } from '@shared/dialog/dialog.service';
import { LocalStorageService } from '@services/local-storage.service';

import { NewStudentReviewDialogComponent } from '../new-student-review-dialog/new-student-review-dialog.component';

import { IStudentReview } from '@models/review.models';
import { studentReviews } from './student-reviews.config';
import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { LocalStorageItems } from '@constants';

@Component({
  selector: 'app-student-reviews',
  templateUrl: './student-reviews.component.html',
  styleUrls: ['./student-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentReviewsComponent implements OnInit {
  public studentReviews: IStudentReview[];

  constructor(
    private readonly dialogService: DialogService,
    private readonly localStorageService: LocalStorageService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initStudentReviews();
  }

  public openReviewAddingDialog(): void {
    const dialogRef: DialogOverlayRef = this.dialogService.open(NewStudentReviewDialogComponent);

    const tempSubscription: Subscription =  dialogRef.afterClosed$
      .subscribe((studentReview: IStudentReview) => {
        this.studentReviews.push(studentReview);
        this.saveToLocalStorage();

        this.cdRef.markForCheck();

        tempSubscription.unsubscribe();
      });
  }

  public removeReview(reviewIndex: number): void {
    this.studentReviews = this.studentReviews.filter((_, index: number) => {
      return index !== reviewIndex;
    });

    this.saveToLocalStorage();
  }

  public trackByFunc(index: number): number {
    return index;
  }

  private saveToLocalStorage(): void {
    this.localStorageService.setAsObject<IStudentReview[]>(LocalStorageItems.StudentReviews, this.studentReviews);
  }

  private initStudentReviews(): void {
    this.studentReviews = this.localStorageService.has(LocalStorageItems.StudentReviews)
      ? this.localStorageService.getAsObject<IStudentReview[]>(LocalStorageItems.StudentReviews)
      : studentReviews;
  }
}
