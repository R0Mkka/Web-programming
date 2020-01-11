import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SubjectsService } from '../../services/subjects.service';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { ICustomField } from '@models/forms';
import { subjectFormConfig } from './new-subject-dialog.config';
import { Subject } from './subject';

@Component({
  selector: 'app-new-subject-dialog',
  templateUrl: './new-subject-dialog.component.html',
  styleUrls: ['./new-subject-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NewSubjectDialogComponent implements OnInit {
  public newSubjectForm: FormGroup;
  public readonly subjectFormConfig: ICustomField[] = subjectFormConfig;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly subjectsService: SubjectsService,
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public addSubject(): void {
    if (!this.newSubjectForm.valid) {
      return;
    }

    const newSubjectFormValue = this.newSubjectForm.value;
    const newSubject = new Subject(
      newSubjectFormValue.subjectTitle,
      newSubjectFormValue.subjectDescription,
      Number(newSubjectFormValue.subjectCourseNumber),
    );

    this.subjectsService
      .addSubject(newSubject)
      .subscribe((createdSubjectData: Subject) => {
        this.dialogRef.close(createdSubjectData);
      });
  }

  private initForm(): void {
    this.newSubjectForm = this.formBuilder.group(
      this.subjectFormConfig.reduce((prev, curr) => ({
        ...prev,
        [curr.control.name]: [curr.control.initialValue, curr.control.validators],
      }), {})
    );
  }
}
