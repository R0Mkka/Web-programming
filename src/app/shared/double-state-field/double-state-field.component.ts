import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

import { Keyboard } from '@constants';

export enum FieldStates {
  Text = 'Text',
  Input = 'Input'
}

@Component({
  selector: 'app-double-state-field',
  templateUrl: './double-state-field.component.html',
  styleUrls: ['./double-state-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DoubleStateFieldComponent implements OnInit {
  public fieldStates = FieldStates;
  public currentState: FieldStates = FieldStates.Text;

  @Input()
  public set state(value: FieldStates) {
    const { width } = getComputedStyle(this.elementRef.nativeElement);

    this.currentState = value;

    this.cdRef.detectChanges();

    if (value === FieldStates.Input) {
      this.setInputSize(width);
      this.setFocus();
    }
  }

  @Input()
  public value: string;

  @Output()
  public valueChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly elementRef: ElementRef
  ) { }

  public ngOnInit(): void {
    this.initKeyboardListeners();
  }

  public setDefaultState(): void {
    const inputRef: HTMLInputElement = this.elementRef.nativeElement.querySelector('input');

    this.valueChanged.emit(inputRef.value);

    this.currentState = FieldStates.Text;

    this.cdRef.markForCheck();
  }

  private initKeyboardListeners(): void {
    this.elementRef.nativeElement.onkeydown = (event: KeyboardEvent) => {
      if (event.key === Keyboard.Enter) {
        event.preventDefault();

        const inputRef: HTMLInputElement = this.elementRef.nativeElement.querySelector('input');

        this.valueChanged.emit(inputRef.value);

        inputRef.blur();
      }
    };
  }

  private setInputSize(widthString: string): void {
    const inputRef: HTMLInputElement = this.elementRef.nativeElement.querySelector('input');

    inputRef.style.width = widthString;
  }

  private setFocus(): void {
    const inputRef: HTMLInputElement = this.elementRef.nativeElement.querySelector('input');

    inputRef.select();
  }
}
