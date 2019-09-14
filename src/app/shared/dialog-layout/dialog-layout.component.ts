import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { DialogOverlayRef } from '@shared/dialog/dialog-overlay-ref.class';

@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogLayoutComponent {
  @Input()
  private readonly dialogRef: DialogOverlayRef;

  public closeDialog(): void {
    if (!this.dialogRef) {
      throw new Error('dialogRef for DialogLayoutComponent is not initialized!');
    }

    this.dialogRef.close();
  }
}
