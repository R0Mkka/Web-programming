import { Injectable } from '@angular/core';

import { NewFolderDialogComponent } from './new-folder-dialog.component';

import { Keyboard } from '@constants';

@Injectable()
export class NewFolderDialogController {
  public initListeners(context: NewFolderDialogComponent): void {
    document.onkeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case Keyboard.Enter:
          event.preventDefault();
          context.createFolder();
          break;
        case Keyboard.Esc:
          event.preventDefault();
          context.dialogRef.close();
          break;
        default:
          break;
      }
    };
  }

  public destroyListeners(): void {
    document.onkeydown = null;
  }
}
