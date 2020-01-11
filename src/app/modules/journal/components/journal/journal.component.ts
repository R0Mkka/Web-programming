import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DialogService } from '@shared/dialog/dialog.service';

import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent {
  constructor(
    private readonly dialogService: DialogService
  ) { }

  public openNewForlderDialog(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    target.blur();

    this.dialogService.open(NewFolderDialogComponent);
  }
}
