import { Subscription } from 'rxjs';
import { Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { DialogService } from '@shared/dialog/dialog.service';
import { LocalStorageService } from '@services/local-storage.service';
import { ScheduleService } from '../../services/schedule.service';

import { EditScheduleItemDialogComponent } from '../edit-schedule-item-dialog/edit-schedule-item-dialog.component';

import { WeekColors } from '../../schedule.config';
import { LocalStorageItems } from '@constants';
import { IScheduleItem, IScheduleColumn } from '@models/subject';
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
  public schedule: IScheduleColumn[];
  public currentWeekDayIndex: number;

  private modalTriggersSub: Subscription = null;

  constructor(
    private readonly dialogService: DialogService,
    private readonly localStorageService: LocalStorageService,
    private readonly scheduleService: ScheduleService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initCurrentDayIndex();
    this.initSchedule();
  }

  public ngOnDestroy(): void {
    if (!!this.modalTriggersSub) {
      this.modalTriggersSub.unsubscribe();
    }
  }

  public get currentWeekSet(): (scheduleColumn: IScheduleColumn) => IScheduleItem[]  {
    return (scheduleColumn: IScheduleColumn): IScheduleItem[] => {
      return this.weekColor === WeekColors.White
        ? scheduleColumn.whiteWeekData
        : scheduleColumn.greenWeekData;
    };
  }

  public checkIsActive(scheduleItem: IScheduleColumn): boolean {
    const [hoursFrom, minutesFrom] = scheduleItem.from.split(':');
    const [hoursTo, minutesTo] = scheduleItem.to.split(':');

    const dateNow = new Date();
    const dateFrom = this.newConfiguredDate(dateNow, hoursFrom, minutesFrom);
    const dateTo = this.newConfiguredDate(dateNow, hoursTo, minutesTo);

    return dateNow >= dateFrom && dateNow <= dateTo;
  }

  public openEditCellDialog(scheduleColumn: IScheduleColumn, itemIndex: number): void {
    const dialogRef = this.dialogService.open(
      EditScheduleItemDialogComponent,
      {
        data: {
          object: this.currentWeekSet(scheduleColumn)[itemIndex],
          more: {
            classIndex: scheduleColumn.index,
            classTime: `${scheduleColumn.from} - ${scheduleColumn.to}`,
            weekDay: this.tableHeader[itemIndex + 2].label
          }
        }
      }
    );

    const localSub: Subscription = dialogRef.afterClosed$.subscribe(result => {
      if (result === null) {
        this.currentWeekSet(scheduleColumn)[itemIndex].isEmpty = true;
      } else {
        this.currentWeekSet(scheduleColumn)[itemIndex] = result;
      }

      this.cdRef.detectChanges();
      this.scheduleService.saveScheduleToLocalStorage(this.schedule);

      localSub.unsubscribe();
    });
  }

  public trackByFunc(index: number): number {
    return index;
  }

  private initCurrentDayIndex(): void {
    this.currentWeekDayIndex = new Date().getDay() - 1;
  }

  private initSchedule(): void {
    this.schedule = this.localStorageService.has(LocalStorageItems.Schedule)
      ? this.localStorageService.getAsObject<IScheduleColumn[]>(LocalStorageItems.Schedule)
      : scheduleConfig;
  }

  private newConfiguredDate(now: Date, hours: string, minutes: string): Date {
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parseInt(hours, 10),
      parseInt(minutes, 10),
      now.getSeconds(),
      now.getMilliseconds()
    );
  }
}
