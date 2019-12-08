import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SubjectsService } from '../../services/subjects.service';
import { YesNoDialogService } from '@services/yes-no-dialog.service';

import { tabsConfig } from './single-subject.config';
import { ILink } from '@models/link.models';
import { Subject } from '../new-subject-dialog/subject';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSubjectComponent implements OnInit {
  public subject: Subject;
  public readonly tabs: ILink[] = tabsConfig;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private subjectsService: SubjectsService,
    private yesNoDialog: YesNoDialogService,
    private cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    const subjectId = this.route.snapshot.paramMap.get('subject');

    this.subjectsService.getSubjectById(subjectId)
      .subscribe(subject => {
        this.subject = subject;

        this.cdRef.detectChanges();
      });
  }

  public openRemoveSubjectDialog(): void {
    this.yesNoDialog.open({
      htmlMessage: `
        Вы дейсвительно хотите удалить дисциплину "${this.subject.title}"?
        <br />
        Восстановить данные будет невозможно.
      `,
      onYes: () => {
        this.subjectsService.deleteSubject(this.subject.id)
          .subscribe(() => {
            this.yesNoDialog.close();

            this.returnBack();
          });
      }
    });
  }

  public returnBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
