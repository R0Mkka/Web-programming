import { ILink } from '@models/link';

export const menuItems: ILink[] = [
  { label: 'Дисциплины', path: '/subjects', matIcon: 'subject' },
  { label: 'Расписание', path: '/schedule', matIcon: 'schedule' },
  { label: 'Журнал', path: '/journal', matIcon: 'view_list' },
  { label: 'Кураторство', path: '/supervision', matIcon: 'supervisor_account' },
  { label: 'Отзывы студентов', path: '/student-reviews', matIcon: 'comment' },
  { label: 'Помощь', path: '/help', matIcon: 'help' }
];
