import { Injectable } from '@angular/core';

import { LocalStorageService } from '@services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { IScheduleColumn } from '@models/subject';

@Injectable()
export class ScheduleService {
  constructor(private readonly localStorageService: LocalStorageService) {}

  public saveScheduleToLocalStorage(schedule: IScheduleColumn[]): void {
    this.localStorageService
      .setAsObject<IScheduleColumn[]>(LocalStorageItems.Schedule, schedule);
  }
}
