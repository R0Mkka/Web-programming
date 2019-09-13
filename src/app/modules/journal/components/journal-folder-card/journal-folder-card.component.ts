import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-journal-folder-card',
  templateUrl: './journal-folder-card.component.html',
  styleUrls: ['./journal-folder-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalFolderCardComponent {
  @Input()
  public index: number;

  @Input()
  public name: string;

  public rightClick(event: MouseEvent): void {
    event.preventDefault();
  }
}
