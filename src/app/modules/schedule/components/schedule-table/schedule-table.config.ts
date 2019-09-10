import { IScheduleSubject, IScheduleColumn } from '@models/subject';

export interface ITableHeaderItem {
  label: string;
  className?: string;
}

export const tableHeaderConfig: ITableHeaderItem[] = [
  { label: 'Пара', className: 'max-height-40' },
  { label: 'Время', className: 'max-height-60' },
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
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[]
  },
  {
    index: 2, from: '10:30', to: '11:50',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[]
  },
  {
    index: 3, from: '12:20', to: '13:40',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[]
  },
  {
    index: 4, from: '13:50', to: '15:10',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[]
  },
  {
    index: 5, from: '15:30', to: '16:50',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[]
  },
  {
    index: 6, from: '17:00', to: '18:20',
    whiteWeekData: [
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' },
      { title: 'Программирование для Интернет', group: '16-ИТ-1', lectureRoom: '320Д' },
      { title: 'Программирование для Интернет', group: '16-ИТ-2', lectureRoom: '211A' },
      { title: 'Программирование для Интернет', group: '16-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[],
    greenWeekData: [
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' },
      { title: 'Языки программирования', group: '17-ИТ-1', lectureRoom: '320Д' },
      { title: 'Языки программирования', group: '17-ИТ-2', lectureRoom: '211A' },
      { title: 'Языки программирования', group: '17-ИТ-3', lectureRoom: '207Г' }
    ] as IScheduleSubject[]
  }
];
