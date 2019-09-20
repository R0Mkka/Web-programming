import { Component, ChangeDetectionStrategy, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NewStudentReviewDialogController } from './new-student-review-dialog.controller';

import { ICustomField } from '@models/forms';
import { studentReviewFormConfig } from './new-student-review-dialog.config';
import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { IStudentReview } from '@models/review.models';

@Component({
  selector: 'app-new-student-review-dialog',
  templateUrl: './new-student-review-dialog.component.html',
  styleUrls: ['./new-student-review-dialog.component.scss'],
  providers: [NewStudentReviewDialogController],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStudentReviewDialogComponent implements OnInit, OnDestroy {
  public readonly studentReviewFormConfig: ICustomField[] = studentReviewFormConfig;

  public studentReviewForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly keyboardController: NewStudentReviewDialogController,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.keyboardController.initListeners(this);
  }

  public ngOnDestroy(): void {
    this.keyboardController.destroyListeners();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public addReview(): void {
    if (!this.studentReviewForm.valid) {
      return;
    }

    const studentReview: IStudentReview = {
      ...this.studentReviewForm.value,
      id: Date.now().toString(),
      date: new Date()
    };

    this.dialogRef.close(studentReview);
  }

  public trackByFunc(index: number): number {
    return index;
  }

  private initForm(): void {
    this.studentReviewForm = this.formBuilder.group(
      this.studentReviewFormConfig.reduce((previous, current) => ({
        ...previous,
        [current.control.name]: [current.control.initialValue, current.control.validators]
      }), {})
    );
  }
}
