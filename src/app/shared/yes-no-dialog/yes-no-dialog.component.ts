import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';

import { DIALOG_DATA } from '@shared/dialog/dialog.service';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';
import { IDialogData, IYesNoData } from '@models/dialog';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YesNoDialogComponent implements OnInit {
  public yesNoDialogData: IYesNoData;

  constructor(
    @Inject(DialogOverlayRef) public readonly dialogRef: DialogOverlayRef,
    @Inject(DIALOG_DATA) public data: IDialogData
  ) { }

  public ngOnInit(): void {
    this.initDialogData();
  }

  public onNo(): void {
    if (this.yesNoDialogData.onNo) {
      this.yesNoDialogData.onNo();

      return;
    }

    this.dialogRef.close();
  }

  private initDialogData(): void {
    this.yesNoDialogData = this.data.object as IYesNoData;
  }
}
