import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

import { DialogService } from '@shared/dialog/dialog.service';

import { NewSubjectDialogComponent } from '../new-subject-dialog/new-subject-dialog.component';

import { Subject } from '../new-subject-dialog/subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[];

  constructor(
    private readonly dialogService: DialogService,
    private readonly subjectsService: SubjectsService,
    private readonly cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.initSubjects();
  }

  public openNewSubjectDialog(): void {
    this.dialogService.open(NewSubjectDialogComponent);
  }

  private initSubjects(): void {
    this.subjectsService.getSubjectList()
      .subscribe((subjectList: Subject[]) => {
        this.subjects = subjectList;

        this.cdRef.markForCheck();
      });
  }
}
