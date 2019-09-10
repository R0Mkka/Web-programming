import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';

import { DIALOG_DATA } from '@shared/dialog/dialog.service';
import { DialogModes } from '@constants';
import { IDialogData } from '@models/dialog';
import { ICustomField } from '@models/forms';
import { IScheduleItem } from '@models/subject';
import { singleSubjectFormConfig } from './schedule-edit-dialog.config';

@Component({
  selector: 'app-schedule-edit-dialog',
  templateUrl: './schedule-edit-dialog.component.html',
  styleUrls: ['./schedule-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEditDialogComponent implements OnInit {
  public isLeaveEmpty: boolean;
  public dialogModes = DialogModes;
  public singleSubjectForm: FormGroup;
  public singleSubjectFormConfig: ICustomField[] = singleSubjectFormConfig;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef,
    @Inject(DIALOG_DATA) public readonly data: IDialogData
  ) { }

  public ngOnInit(): void {
    this.initForm();

    this.isLeaveEmpty = this.data.object.isEmpty;
  }

  public get dialogMode(): DialogModes {
    return this.data.type;
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    if (this.isLeaveEmpty) {
      return this.dialogRef.close(null);
    }

    if (this.singleSubjectForm.dirty) {
      return this.dialogRef.close(this.singleSubjectForm.value);
    }

    this.closeModal();
  }

  public leaveEmpty(flag: boolean): void {
    this.isLeaveEmpty = flag;

    this.singleSubjectForm.markAsDirty();
  }

  private initForm(): void {
    const subjectInfo = this.data.object as IScheduleItem;

    this.singleSubjectForm = this.formBuilder.group({
      ...this.singleSubjectFormConfig.reduce((previous, current) => ({
        ...previous,
        [current.control.name]: [
          subjectInfo[current.control.name] || current.control.initialValue,
          current.control.validators
        ]
      }), {})
    });
  }
}
