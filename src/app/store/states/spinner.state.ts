import { State, Action, StateContext } from '@ngxs/store';

import { ShowSpinnerAction, HideSpinnerAction } from '../actions/spinner.actions';

import { ISpinnerState } from '../models/spinner.models';

type ctxType = StateContext<ISpinnerState>;

@State<ISpinnerState>({
  name: 'spinner',
  defaults: {
    isShown: false
  }
})
export class SpinnerState {
  @Action(ShowSpinnerAction)
  public showSpinner(ctx: ctxType): void {
    ctx.setState({
      isShown: true
    });
  }

  @Action(HideSpinnerAction)
  public hideSpinner(ctx: ctxType): void {
    ctx.setState({
      isShown: false
    });
  }
}
