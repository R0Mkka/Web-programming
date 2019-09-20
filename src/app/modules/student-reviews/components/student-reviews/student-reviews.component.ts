import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

import { SpinnerService } from '@services/spinner.service';
import { DialogService } from '@shared/dialog/dialog.service';
import { StudentReviewsService } from '../../services/student-reviews.service';

import { NewStudentReviewDialogComponent } from '../new-student-review-dialog/new-student-review-dialog.component';

import { IStudentReview } from '@models/review.models';
import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';

@Component({
  selector: 'app-student-reviews',
  templateUrl: './student-reviews.component.html',
  styleUrls: ['./student-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentReviewsComponent implements OnInit {
  public studentReviews$: BehaviorSubject<IStudentReview[]> = new BehaviorSubject<IStudentReview[]>([]);

  public get studentReviewsStream(): Observable<IStudentReview[]> {
    return this.studentReviews$.asObservable();
  }

  constructor(
    private readonly spinnerService: SpinnerService,
    private readonly dialogService: DialogService,
    private readonly studentReviewsService: StudentReviewsService
  ) { }

  public ngOnInit(): void {
    this.spinnerService.show();
    this.initStudentReviews();
  }

  public openReviewAddingDialog(): void {
    const dialogRef: DialogOverlayRef = this.dialogService.open(NewStudentReviewDialogComponent);

    this.subscribeOnDialogResult(dialogRef);
  }

  public removeReview(removingReview: IStudentReview): void {
    const reviewList: IStudentReview[] = this.studentReviews$.getValue();

    this.studentReviews$.next(reviewList.filter(ref => ref !== removingReview));

    this.studentReviewsService.deleteStudentReview(removingReview).subscribe();
  }

  public trackByFunc(_: number, element: IStudentReview): string {
    return element.id;
  }

  private initStudentReviews(): void {
    this.studentReviewsService.getStudentReviewList()
      .subscribe((reviewList: IStudentReview[]) => {
        this.studentReviews$.next(reviewList);

        this.spinnerService.hide();
      });
  }

  private subscribeOnDialogResult(dialogRef: DialogOverlayRef): void {
    const tempSubscription: Subscription =  dialogRef.afterClosed$
      .subscribe((studentReview: IStudentReview) => {
        const reviewList: IStudentReview[] = this.studentReviews$.getValue();

        reviewList.push(studentReview);

        this.studentReviews$.next(reviewList);

        this.studentReviewsService.addStudentReview(studentReview).subscribe();

        tempSubscription.unsubscribe();
      });
  }
}
