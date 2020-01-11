import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-building-block-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteBuildingBlockComponent {
  @Input() public important = false;
}
