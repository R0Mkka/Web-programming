import { Injectable } from '@angular/core';

import { NewStudentReviewDialogComponent } from './new-student-review-dialog.component';

import { Keyboard } from '@constants';

@Injectable()
export class NewStudentReviewDialogController {
  public initListeners(context: NewStudentReviewDialogComponent): void {
    document.onkeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case Keyboard.Enter:
          event.preventDefault();
          context.addReview();
          break;
        case Keyboard.Esc:
          event.preventDefault();
          context.closeDialog();
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
