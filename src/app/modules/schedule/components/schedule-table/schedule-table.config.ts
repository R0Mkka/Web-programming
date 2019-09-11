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

export const scheduleConfig: IScheduleColumn[] = [
  {
    index: 1, from: '9:00', to: '10:20',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[]
  },
  {
    index: 2, from: '10:30', to: '11:50',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[]
  },
  {
    index: 3, from: '12:20', to: '13:40',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[]
  },
  {
    index: 4, from: '13:50', to: '15:10',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[]
  },
  {
    index: 5, from: '15:30', to: '16:50',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[]
  },
  {
    index: 6, from: '17:00', to: '18:20',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A', isEmpty: false },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г', isEmpty: false }
    ] as IScheduleItem[]
  }
];
