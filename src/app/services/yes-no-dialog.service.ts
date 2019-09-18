import { Injectable } from '@angular/core';

import { DialogService } from '@shared/dialog/dialog.service';

import { YesNoDialogComponent } from '@shared/yes-no-dialog/yes-no-dialog.component';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { IYesNoData } from '@models/dialog';

@Injectable({
  providedIn: 'root'
})
export class YesNoDialogService {
  private dialogRef: DialogOverlayRef;

  constructor(
    private readonly dialogService: DialogService
  ) { }

  public open(dialogData: IYesNoData): void {
    this.dialogRef = this.dialogService.open(YesNoDialogComponent, {
      data: {
        object: dialogData
      }
    });
  }

  public close(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
