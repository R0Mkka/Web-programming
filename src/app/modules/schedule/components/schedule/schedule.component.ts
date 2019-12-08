import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { WeekColors } from '../../schedule.config';
import { YesNoDialogService } from '@services/yes-no-dialog.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
  public weekColor: WeekColors = WeekColors.White;
  public clearSchedule = false;

  constructor(
    private yesNoDialog: YesNoDialogService,
    private cdRef: ChangeDetectorRef,
  ) {}

  public get currentWeekColor(): string {
    return this.weekColor === 'White' ? 'Белая' : 'Зелёная';
  }

  public openClearScheduleDialog(): void {
    this.yesNoDialog.open({
      htmlMessage: `
        Вы действительно хотите очистить расписание?
        <br />
        Данное действие будет невозможно отменить.
      `,
      onYes: () => {
        this.clearSchedule = true;

        this.cdRef.detectChanges();

        this.yesNoDialog.close();
      },
    });
  }

  public toggleWeekColor(): void {
    this.weekColor = this.weekColor === WeekColors.White
      ? WeekColors.Green
      : WeekColors.White;
  }
}
