import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

export class DialogOverlayRef {
  public afterClosed$: Subject<any> = new Subject<any>();

  constructor(private overlayRef: OverlayRef) { }

  public close(data?: any): void {
    this.overlayRef.dispose();

    if (!!data || data === null) {
      this.afterClosed$.next(data);
    }
  }
}
