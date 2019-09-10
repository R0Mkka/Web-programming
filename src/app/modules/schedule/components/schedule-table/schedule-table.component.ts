import { Subscription } from 'rxjs';
import { Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy } from '@angular/core';

import { DialogService } from '@shared/dialog/dialog.service';
import { ScheduleService } from '../../services/schedule.service';

import { ScheduleEditDialogComponent } from '../schedule-edit-dialog/schedule-edit-dialog.component';

import { WeekColors } from '../../schedule.config';
import { DialogModes } from '@constants';
import { IScheduleSubject, IScheduleColumn } from '@models/subject';
import { scheduleConfig, tableHeaderConfig, ITableHeaderItem } from './schedule-table.config';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleTableComponent implements OnInit, OnDestroy {
  @Input() public weekColor: WeekColors;

  public tableHeader: ITableHeaderItem[] = tableHeaderConfig;
  public schedule: IScheduleColumn[] = scheduleConfig;

  private modalTriggersSub: Subscription = null;

  constructor(
    private readonly dialogService: DialogService,
    private readonly scheduleService: ScheduleService
  ) { }

  public ngOnInit(): void {
    this.subOnModalTriggers();
  }

  public ngOnDestroy(): void {
    if (!!this.modalTriggersSub) {
      this.modalTriggersSub.unsubscribe();
    }
  }

  public get currentWeekSet(): (scheduleItem: IScheduleColumn) => IScheduleSubject[]  {
    return (scheduleItem: IScheduleColumn): IScheduleSubject[] => {
      return this.weekColor === WeekColors.White
        ? scheduleItem.whiteWeekData
        : scheduleItem.greenWeekData;
    };
  }

  public checkIsActive(scheduleItem: IScheduleColumn): boolean {
    const dateNow = new Date();
    const hoursNow = dateNow.getHours();
    const minutesNow = dateNow.getMinutes();

    const [hoursFrom, minutesFrom] = scheduleItem.from.split(':');
    const [hoursTo, minutesTo] = scheduleItem.to.split(':');

    const hoursFromNum = +hoursFrom;
    const minutesFromNum = +minutesFrom;

    const hoursToNum = +hoursTo;
    const minutesToNum = +minutesTo;

    return ((hoursFromNum < hoursNow && hoursToNum >= hoursNow) && (minutesToNum >= minutesNow)) ||
      ((hoursFromNum === hoursNow) && (minutesFromNum <= minutesNow));
  }

  public openEditCellDialog(scheduleSubject: IScheduleSubject): void {
    this.dialogService.open(
      ScheduleEditDialogComponent,
      {
        data: {
          type: DialogModes.EditSingleSubject,
          object: scheduleSubject
        }
      }
    );
  }

  public trackByFunc(index: number): number {
    return index;
  }

  private subOnModalTriggers(): void {
    this.modalTriggersSub = this.scheduleService.openModal$.subscribe(() => {
      // this.dialogService.open(ScheduleEditDialogComponent, { data: {lol: 'kek'} });
    });
  }
}
