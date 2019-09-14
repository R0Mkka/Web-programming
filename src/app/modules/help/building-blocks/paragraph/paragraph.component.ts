import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-building-block-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParagraphBuildingBlockComponent {
  @Input()
  public readonly headline: string;
}
