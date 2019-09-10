import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-flag',
  templateUrl: './custom-flag.component.html',
  styleUrls: ['./custom-flag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomFlagComponent {
  @Input()
  public label: string;

  @Input()
  public isCkecked = false;

  @Output()
  public toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggleState(): void {
    this.isCkecked = !this.isCkecked;

    this.toggle.emit(this.isCkecked);
  }
}
