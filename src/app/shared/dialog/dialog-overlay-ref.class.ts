import { OverlayRef } from '@angular/cdk/overlay';

export class DialogOverlayRef {
  constructor(private overlayRef: OverlayRef) { }

  public close(): void {
    this.overlayRef.dispose();
  }
}
