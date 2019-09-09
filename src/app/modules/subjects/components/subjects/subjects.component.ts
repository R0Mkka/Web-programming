
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ISubject } from '@models/subject';
import { subjects } from './subjects.config';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsComponent {
  public subjects: ISubject[] = subjects;

  constructor() {
    localStorage.setItem('Subjects', JSON.stringify(
      subjects.reduce((acc, curr) => ({
        ...acc,
        [curr.accessName]: curr
      }), {})
    ));
  }
}
