import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LocalStorageService } from '@services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { IScheduleColumn } from '@models/subject';

@Injectable()
export class ScheduleService {
  public openModal$: Subject<void> = new Subject<void>();

  constructor(private readonly localStorageService: LocalStorageService) {}

  public saveScheduleToLocalStorage(schedule: IScheduleColumn[]): void {
    this.localStorageService.setAsObject<IScheduleColumn[]>(LocalStorageItems.Schedule, schedule);
  }
}
