import { Component, ChangeDetectionStrategy, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';

import { DIALOG_DATA } from '@shared/dialog/dialog.service';
import { IDialogData } from '@models/dialog';
import { ICustomField } from '@models/forms';
import { IScheduleItem } from '@models/subject';
import { editScheduleItemFormConfig } from './edit-schedule-item-dialog.config';

@Component({
  selector: 'app-schedule-edit-dialog',
  templateUrl: './edit-schedule-item-dialog.component.html',
  styleUrls: ['./edit-schedule-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditScheduleItemDialogComponent implements OnInit, OnDestroy {
  public isLeaveEmpty: boolean;
  public editScheduleItemForm: FormGroup;
  public editScheduleItemFormConfig: ICustomField[] = editScheduleItemFormConfig;

  private listeningFunction: (event: KeyboardEvent) => void;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef,
    @Inject(DIALOG_DATA) public readonly data: IDialogData
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.initKeysListening();

    this.isLeaveEmpty = this.data.object.isEmpty;
  }

  public ngOnDestroy(): void {
    this.removeKeysListening();
  }

  public get canBeSaved(): boolean {
    return this.editScheduleItemForm.valid || this.isLeaveEmpty;
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public saveChanges(): void {
    if (!this.canBeSaved) {
      return;
    }

    if (this.isLeaveEmpty) {
      return this.dialogRef.close(null);
    }

    if (this.editScheduleItemForm.dirty) {
      return this.dialogRef.close(this.editScheduleItemForm.value);
    }

    this.closeModal();
  }

  public leaveEmpty(flag: boolean): void {
    this.isLeaveEmpty = flag;

    this.editScheduleItemForm.markAsDirty();
  }

  private initForm(): void {
    const subjectInfo = this.data.object as IScheduleItem;

    this.editScheduleItemForm = this.formBuilder.group({
      ...this.editScheduleItemFormConfig.reduce((previous, current) => ({
        ...previous,
        [current.control.name]: [
          subjectInfo[current.control.name] || current.control.initialValue,
          current.control.validators
        ]
      }), {})
    });

    this.editScheduleItemForm.statusChanges.subscribe(status => console.log(status));
  }

  private initKeysListening(): void {
    this.listeningFunction = (event: KeyboardEvent): void => {
      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          this.closeModal();
          break;
        case 'Enter':
          event.preventDefault();
          this.saveChanges();
          break;
        default:
          return;
      }
    };

    document.addEventListener('keydown', this.listeningFunction);
  }

  private removeKeysListening(): void {
    document.removeEventListener('keydown', this.listeningFunction);
  }
}
