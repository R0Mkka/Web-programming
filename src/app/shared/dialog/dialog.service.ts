import { Injectable, InjectionToken, Injector } from '@angular/core';
import { Overlay, ComponentType, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { DialogOverlayRef } from './dialog-overlay-ref.class';
import { defaultDialogConfig } from './dialog.config';
import { IDialogConfig } from '@models/dialog';

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector
  ) { }

  public open(component: ComponentType<unknown>, dialogConfig?: IDialogConfig) {
    const overlayRef = this.createOverlayRef(dialogConfig || {});
    const dialogRef = new DialogOverlayRef(overlayRef);
    const injector = this.createInjector(dialogConfig || {}, dialogRef);
    const componentRef = new ComponentPortal(component, null, injector);

    overlayRef.attach(componentRef);
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlayRef(dialogConfig: IDialogConfig): OverlayRef {
    const overlayConfig = this.getOverlayConfig(dialogConfig);

    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(dialogConfig: IDialogConfig): OverlayConfig {
    const finalConfig = { ...defaultDialogConfig, ...dialogConfig };

    return new OverlayConfig({
      ...finalConfig,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  private createInjector(dialogConfig: IDialogConfig, dialogRef: DialogOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(DialogOverlayRef, dialogRef);
    injectionTokens.set(DIALOG_DATA, dialogConfig.data || {});

    return new PortalInjector(this.injector, injectionTokens);
  }
}
