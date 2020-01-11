import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject as Subject$ } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
export class SubjectsComponent implements OnInit, OnDestroy {
  public subjects: Subject[];

  private readonly destroy$ = new Subject$<void>();

  constructor(
    private readonly dialogService: DialogService,
    private readonly subjectsService: SubjectsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.initSubjects();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get hasSubjects(): boolean {
    return !!this.subjects && !!this.subjects.length;
  }

  public openNewSubjectDialog(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    target.blur();

    const dialogRef = this.dialogService.open(NewSubjectDialogComponent);

    dialogRef.afterClosed$
      .pipe(takeUntil(this.destroy$))
      .subscribe((createdSubjectData: Subject) => {
        if (!createdSubjectData) {
          return;
        }

        this.router.navigate([createdSubjectData.id], { relativeTo: this.route });
      });
  }

  private initSubjects(): void {
    this.subjectsService.getSubjectList()
      .subscribe((subjectList: Subject[]) => {
        this.subjects = subjectList;

        this.cdRef.markForCheck();
      });
  }
}
