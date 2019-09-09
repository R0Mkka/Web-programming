import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalStorageService } from '@services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { tabsConfig } from './single-subject.config';
import { ISubject } from '@models/subject';
import { ILink } from '@models/link';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSubjectComponent implements OnInit {
  public subject: ISubject;
  public tabs: ILink[] = tabsConfig;

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) { }

  public ngOnInit(): void {
    const subjectName = this.route.snapshot.paramMap.get('subject');

    if (!this.localStorage.has(LocalStorageItems.Subjects)) {
      this.localStorage.set(LocalStorageItems.Subjects, JSON.stringify({}));

      return;
    }

    this.subject = this.localStorage.getAsObject<any>(LocalStorageItems.Subjects)[subjectName];
  }
}
