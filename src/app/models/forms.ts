import { ValidatorFn } from '@angular/forms';

export interface ICustomField {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  control: {
    name: string;
    initialValue: any;
    validators: ValidatorFn[]
  };
}
