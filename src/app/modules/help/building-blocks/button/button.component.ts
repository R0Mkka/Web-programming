import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

type ButtonTypes = 'primary' | 'secondary' | 'square' | 'circle' | 'circle-outlined';

@Component({
  selector: 'app-building-block-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBuildingBlockComponent {
  @Input()
  public readonly type: ButtonTypes;

  @Input()
  public readonly matIcon: string;

  @Input()
  public readonly doubleIcon: boolean;

  public get buttonClass(): string {
    return `${this.type}-button-building-block`;
  }
}
