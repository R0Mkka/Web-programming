import { ValidatorFn } from '@angular/forms';

export enum ControlTypes {
  Input = 'Input',
  Select = 'Select'
}

export interface ICustomField {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  matIcon?: string;
  control: {
    type?: ControlTypes;
    name: string;
    initialValue?: any;
    values?: any[];
    validators: ValidatorFn[]
  };
}
