import { Component, ChangeDetectionStrategy } from '@angular/core';

const WeekDay: string[] = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public get currentDate(): Date {
    return new Date();
  }

  public get currentWeekDay(): string {
    return WeekDay[new Date().getDay()];
  }
}
