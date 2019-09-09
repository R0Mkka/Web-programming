import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IScheduleSubject } from '@models/subject';
import { WeekColors } from '../../schedule.config';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleTableComponent {
  @Input() public weekColor: WeekColors;

  public tableHeader: any[] = [
    { label: 'Пара', className: 'max-height-40' },
    { label: 'Время', className: 'max-height-60' },
    { label: 'Понедельник' },
    { label: 'Вторник' },
    { label: 'Среда' },
    { label: 'Четверг' },
    { label: 'Пятница' },
    { label: 'Суббота' }
  ];

  public schedule: any[] = [
    {
      index: 1,
      from: '9:00',
      to: '10:20',
      whiteWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        {
          title: 'Программирование для Интернет Интернет Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
      ] as any[],
      greenWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        2, 3, 4, 5, 6
      ] as any[],
    },
    {
      index: 2,
      from: '10:30',
      to: '11:50',
      whiteWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        2, 3,
        {
          title: 'Программирование для Интернет Интернет Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        }, 5, 6
      ] as any[],
      greenWeekData: [1, 2, 3, 4, 5, 6] as any[],
    },
    {
      index: 3,
      from: '12:20',
      to: '13:40',
      whiteWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        2, 3, 4, 5, 6
      ] as any[],
      greenWeekData: [1, 2, 3, 4, 5, 6] as any[],
    },
    {
      index: 4,
      from: '13:50',
      to: '15:10',
      whiteWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        2, 3, 4, 5, 6
      ] as any[],
      greenWeekData: [1, 2, 3, 4, 5, 6] as any[],
    },
    {
      index: 5,
      from: '15:30',
      to: '16:50',
      whiteWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        2, 3, 4, 5, 6
      ] as any[],
      greenWeekData: [1, 2, 3, 4, 5, 6] as any[],
    },
    {
      index: 6,
      from: '17:00',
      to: '18:20',
      whiteWeekData: [
        {
          title: 'Программирование для Интернет',
          group: '16-ИТ-1',
          lectureRoom: '320Д'
        },
        2, 3, 4, 5, 6
      ] as any[],
      greenWeekData: [1, 2, 3, 4, 5, 6] as any[],
    }
  ];

  public checkIsActive(item): boolean {
    const dateNow = new Date();
    const hoursNow = dateNow.getHours();
    const minutesNow = dateNow.getMinutes();

    let [hoursFrom, minutesFrom] = item.from.split(':');
    let [hoursTo, minutesTo] = item.to.split(':');

    hoursFrom = parseInt(hoursFrom, 10);
    minutesFrom = parseInt(minutesFrom, 10);

    hoursTo = parseInt(hoursTo, 10);
    minutesTo = parseInt(minutesTo, 10);

    return ((hoursFrom < hoursNow && hoursTo >= hoursNow) && (minutesTo >= minutesNow)) ||
      ((hoursFrom === hoursNow) && (minutesFrom <= minutesNow));
  }
}
