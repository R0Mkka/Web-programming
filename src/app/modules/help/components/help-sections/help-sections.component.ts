import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IHelpSection } from '@models/sections.models';
import { ApplicationSections } from '@constants';

@Component({
  selector: 'app-help-sections',
  templateUrl: './help-sections.component.html',
  styleUrls: ['./help-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpSectionsComponent {
  public readonly sectionList: IHelpSection[] = [
    {
      label: ApplicationSections.StudentReviews,
      items: [
        { label: 'Добавить отзыв', path: 'add-student-review' }
      ]
    }
  ];
}
