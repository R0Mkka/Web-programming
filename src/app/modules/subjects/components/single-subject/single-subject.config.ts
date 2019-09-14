import { PATHS } from '../../subjects.config';
import { ILink } from '@models/link.models';

export const tabsConfig: ILink[] = [
  { label: 'Программа', path: PATHS.PLAN },
  { label: 'Лекции', path: PATHS.LECTURES },
  { label: 'Лаб. работы', path: PATHS.LABS },
  { label: 'Тесты', path: PATHS.TESTS },
  { label: 'Экзамен/Зачет', path: PATHS.EXAMS },
];
