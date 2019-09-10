import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScheduleService {
  public openModal$: Subject<void> = new Subject<void>();

  constructor() {}
}
