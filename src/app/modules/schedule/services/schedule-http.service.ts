import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { IScheduleColumn } from '@models/subject';
import { scheduleConfig } from '../components/schedule-table/schedule-table.config';

const API = 'http://localhost:3000/schedule-lesson-info';

@Injectable()
export class ScheduleHttpService {
  constructor(private http: HttpClient) {}

  public getSchedule(): Observable<IScheduleColumn[]> {
    return this.http.get<IScheduleColumn[]>(API);
  }

  public clearSchedule(): Observable<any> {
    return forkJoin(
      scheduleConfig.map((scheduleLessonInfo: IScheduleColumn) => this.modifySheduleLessonInfo(scheduleLessonInfo)),
    );
  }

  public modifySheduleLessonInfo(scheduleLessonInfo: IScheduleColumn): Observable<any> {
    return this.http.patch(`${API}/${scheduleLessonInfo.id}`, scheduleLessonInfo);
  }
}
