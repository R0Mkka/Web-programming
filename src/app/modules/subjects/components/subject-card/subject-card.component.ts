import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ISubject } from '@models/subject';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectCardComponent {
  @Input() public readonly subject: ISubject;

  public removeSubject(): void {
    console.log('removeSubject');
  }
}
