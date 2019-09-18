import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-select-field',
  templateUrl: './custom-select-field.component.html',
  styleUrls: ['./custom-select-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectFieldComponent),
      multi: true
    }
  ]
})
export class CustomSelectFieldComponent implements ControlValueAccessor {
  @Input() public id: string;
  @Input() public label: string;
  @Input() public values: string[];
  @Input() public matIcon: string;
  // @Input() public validators: ValidatorFn[];
  @Input() public placeholder = 'Выберите';

  public selectedValue = '';

  public onChange = (value: string): void => { };
  public onTouch = (): void => { };

  public writeValue(value: string): void {
    this.selectedValue = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    
  }
}
