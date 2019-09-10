import { DialogModes } from '@constants';

export interface IDialogData {
  type: DialogModes;
  object: any;
}

export interface IDialogConfig {
  width?: string;
  height?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  data?: IDialogData;
}
