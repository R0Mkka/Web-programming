export interface IDialogData {
  object: any;
  type?: string;
  more?: any;
}

export interface IDialogConfig {
  width?: string;
  height?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  data?: IDialogData;
}
