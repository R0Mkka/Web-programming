import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.component.html',
  styleUrls: ['./inner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent {
  @Input() public useDivider = false;
}
