import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-journal-folder-card',
  templateUrl: './journal-folder-card.component.html',
  styleUrls: ['./journal-folder-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalFolderCardComponent {
  @ViewChild(MatMenuTrigger, { static: false })
  public matMenuTrigger: MatMenuTrigger;

  @Input()
  public index: number;

  @Input()
  public name: string;

  public rightClick(event: MouseEvent): void {
    event.preventDefault();

    this.matMenuTrigger.openMenu();
  }
}
