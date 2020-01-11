import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IHelpSection } from '@models/sections.models';
import { sectionList } from './help-sections.config';

@Component({
  selector: 'app-help-sections',
  templateUrl: './help-sections.component.html',
  styleUrls: ['./help-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpSectionsComponent {
  public readonly sectionList: IHelpSection[] = sectionList;
}
