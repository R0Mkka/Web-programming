import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-building-block-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageBuildingBlockComponent {
  @Input()
  public readonly name: string;

  public get fullImageUrl(): string {
    return `../../../../../assets/images/screenshots/${this.name}`;
  }
}
