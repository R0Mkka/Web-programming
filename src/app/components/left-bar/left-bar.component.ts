import { Component, ChangeDetectionStrategy } from '@angular/core';

import { menuItems } from './left-bar.config';
import { ILink } from '@models/link';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftBarComponent {
  public menuItems: ILink[] = menuItems;
}
