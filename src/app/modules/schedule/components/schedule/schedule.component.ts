import { Component, ChangeDetectionStrategy } from '@angular/core';

import { WeekColors } from '../../schedule.config';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
  public weekColor: WeekColors = WeekColors.White;

  public toggleWeekColor(): void {
    this.weekColor = this.weekColor === WeekColors.White
      ? WeekColors.Green
      : WeekColors.White;
  }
}
