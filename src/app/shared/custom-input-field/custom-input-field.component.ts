import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, ValidatorFn } from '@angular/forms';

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
  @Input() public matIcon: string;
  @Input() public validators: ValidatorFn[];
  @Input() public placeholder = 'Введите здесь';

  @Input() public set readonly(value: boolean) {
    this.setDisabledState(value);
  }

  public inputFieldControl: FormControl = null;

  public onChange = (value: any): void => { };
  public onTouch = (): void => { };

  public get errorMessage(): string  {
    const controlErrors = this.inputFieldControl.errors;

    if (!controlErrors) {
      return '';
    }

    switch (true) {
      case !!controlErrors.required:
        return 'Поле должно быть заполнено!';
      case !!controlErrors.maxlength:
        return 'Превышено допустимое количество символов!';
      case !!controlErrors.max:
        return 'Превышено максимальное значение!';
      default:
        return '';
    }
  }

  public get isFieldInvalid(): boolean {
    return this.errorMessage.length > 0 && (this.inputFieldControl.touched || this.inputFieldControl.dirty);
  }

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

  public setDisabledState(isDisabled: boolean): void {
    if (!this.inputFieldControl) {
      this.initControl();
    }

    if (isDisabled) {
      this.inputFieldControl.disable();
    } else {
      this.inputFieldControl.enable();
    }
  }

  private initControl(): void {
    this.inputFieldControl = new FormControl('', this.validators || []);
  }
}
