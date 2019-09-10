import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';

import { DIALOG_DATA } from '@shared/dialog/dialog.service';
import { DialogModes } from '@constants';
import { IDialogData } from '@models/dialog';
import { ICustomField } from '@models/forms';
import { IScheduleSubject } from '@models/subject';
import { singleSubjectFormConfig } from './schedule-edit-dialog.config';

@Component({
  selector: 'app-schedule-edit-dialog',
  templateUrl: './schedule-edit-dialog.component.html',
  styleUrls: ['./schedule-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEditDialogComponent implements OnInit {
  public dialogModes = DialogModes;
  public singleSubjectForm: FormGroup;
  public singleSubjectFormConfig: ICustomField[] = singleSubjectFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef,
    @Inject(DIALOG_DATA) public readonly data: IDialogData
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public get dialogMode(): DialogModes {
    return this.data.type;
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    console.log(this.singleSubjectForm.value);
  }

  private initForm(): void {
    const subjectInfo = this.data.object as IScheduleSubject;

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
