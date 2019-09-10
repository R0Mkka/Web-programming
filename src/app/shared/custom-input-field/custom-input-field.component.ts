import { Component, ChangeDetectionStrategy, forwardRef, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input-field',
  templateUrl: './custom-input-field.component.html',
  styleUrls: ['./custom-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputFieldComponent),
      multi: true
    }
  ]
})
export class CustomInputFieldComponent implements ControlValueAccessor {
  @Input() public id: string;
  @Input() public type: string;
  @Input() public label: string;
  @Input() public placeholder: string;

  public inputFieldControl: FormControl = null;

  public onChange = (value: any): void => {};
  public onTouch = (): void => {};

  public writeValue(value: any): void {
    if (!this.inputFieldControl) {
      this.initControl();
    }

    this.inputFieldControl.setValue(value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  private initControl(): void {
    this.inputFieldControl = new FormControl('');
  }
}
