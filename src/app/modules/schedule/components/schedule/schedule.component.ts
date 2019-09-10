import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ScheduleService } from '../../services/schedule.service';

import { WeekColors } from '../../schedule.config';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
  public weekColor: WeekColors = WeekColors.White;

  public get currentWeekColor(): string {
    return this.weekColor === 'White' ? 'Белая' : 'Зелёная';
  }

  constructor(
    private readonly scheduleService: ScheduleService
  ) { }

  public toggleWeekColor(): void {
    this.weekColor = this.weekColor === WeekColors.White
      ? WeekColors.Green
      : WeekColors.White;
  }

  public openModal(): void {
    this.scheduleService.openModal$.next();
  }
}
