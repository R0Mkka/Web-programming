import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IHelpSection } from '@models/sections.models';

@Component({
  selector: 'app-help-section-card',
  templateUrl: './help-section-card.component.html',
  styleUrls: ['./help-section-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpSectionCardComponent {
  @Input()
  public readonly section: IHelpSection;

  public isExpanded = false;

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  public get maxHeight(): number {
    if (!this.isExpanded) {
      return 0;
    }

    return this.section.items.length * 50;
  }
}
