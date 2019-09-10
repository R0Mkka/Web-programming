import { Subscription } from 'rxjs';
import { Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { DialogService } from '@shared/dialog/dialog.service';
import { LocalStorageService } from '@services/local-storage.service';
import { ScheduleService } from '../../services/schedule.service';

import { ScheduleEditDialogComponent } from '../schedule-edit-dialog/schedule-edit-dialog.component';

import { WeekColors } from '../../schedule.config';
import { DialogModes, LocalStorageItems } from '@constants';
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

  private modalTriggersSub: Subscription = null;

  constructor(
    private readonly dialogService: DialogService,
    private readonly localStorageService: LocalStorageService,
    private readonly scheduleService: ScheduleService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initSchedule();
    this.subOnModalTriggers();
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

  public openEditCellDialog(scheduleColumn: IScheduleColumn, itemIndex: number): void {
    const dialogRef = this.dialogService.open(
      ScheduleEditDialogComponent,
      {
        data: {
          type: DialogModes.EditSingleSubject,
          object: this.currentWeekSet(scheduleColumn)[itemIndex]
        }
      }
    );

    const localSub = dialogRef.afterClosed$.subscribe(result => {
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

  private subOnModalTriggers(): void {
    this.modalTriggersSub = this.scheduleService.openModal$.subscribe(() => {
      // this.dialogService.open(ScheduleEditDialogComponent, { data: {lol: 'kek'} });
    });
  }

  private initSchedule(): void {
    this.schedule = this.localStorageService.has(LocalStorageItems.Schedule)
      ? this.localStorageService.getAsObject<IScheduleColumn[]>(LocalStorageItems.Schedule)
      : scheduleConfig;
  }
}
