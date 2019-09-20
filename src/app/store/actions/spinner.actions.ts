export const ACTIONS_TYPE = '[Spinner]';

export class ShowSpinnerAction {
  static readonly type = `${ACTIONS_TYPE} ShowSpinner`;
}

export class HideSpinnerAction {
  static readonly type = `${ACTIONS_TYPE} HideSpinner`;
}
