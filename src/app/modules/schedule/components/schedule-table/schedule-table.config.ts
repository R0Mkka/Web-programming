import { IScheduleItem, IScheduleColumn } from '@models/subject';

export interface ITableHeaderItem {
  label: string;
  className?: string;
}

export const tableHeaderConfig: ITableHeaderItem[] = [
  { label: 'Пара', className: 'class-index-cell' },
  { label: 'Время', className: 'time-cell' },
  { label: 'Понедельник' },
  { label: 'Вторник' },
  { label: 'Среда' },
  { label: 'Четверг' },
  { label: 'Пятница' },
  { label: 'Суббота' }
];

export const emptyWeekSet: IScheduleItem[] = [
  { isEmpty: true },
  { isEmpty: true },
  { isEmpty: true },
  { isEmpty: true },
  { isEmpty: true },
  { isEmpty: true },
];

export const scheduleConfig: IScheduleColumn[] = [
  {
    id: 1, from: '9:00', to: '10:20',
    whiteWeekData: emptyWeekSet.slice(0),
    greenWeekData: emptyWeekSet.slice(0),
  },
  {
    id: 2, from: '10:30', to: '11:50',
    whiteWeekData: emptyWeekSet.slice(0),
    greenWeekData: emptyWeekSet.slice(0),
  },
  {
    id: 3, from: '12:20', to: '13:40',
    whiteWeekData: emptyWeekSet.slice(0),
    greenWeekData: emptyWeekSet.slice(0),
  },
  {
    id: 4, from: '13:50', to: '15:10',
    whiteWeekData: emptyWeekSet.slice(0),
    greenWeekData: emptyWeekSet.slice(0),
  },
  {
    id: 5, from: '15:30', to: '16:50',
    whiteWeekData: emptyWeekSet.slice(0),
    greenWeekData: emptyWeekSet.slice(0),
  },
  {
    id: 6, from: '17:00', to: '18:20',
    whiteWeekData: emptyWeekSet.slice(0),
    greenWeekData: emptyWeekSet.slice(0),
  }
];
