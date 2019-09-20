import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { ShowSpinnerAction, HideSpinnerAction } from '@store/actions/spinner.actions';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(private readonly store: Store) { }

  public show(): void {
    this.store.dispatch(new ShowSpinnerAction());
  }

  public hide(): void {
    this.store.dispatch(new HideSpinnerAction());
  }
}
