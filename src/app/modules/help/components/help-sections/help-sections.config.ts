import { ApplicationSections } from '@constants';
import { IHelpSection } from '@models/sections.models';

export const sectionList: IHelpSection[] = [
  {
    label: ApplicationSections.Subjects,
    items: [
    ]
  },
  {
    label: ApplicationSections.Schedule,
    items: [
      { label: 'Изменение цвета недели', path: 'change-week-color' },
      { label: 'Редактирование пары', path: 'edit-schedule-item' },
      { label: 'Очистка расписания', path: 'clear-schedule' },
    ]
  },
  {
    label: ApplicationSections.Journal,
    items: [
      { label: 'Создание новой папки', path: 'create-folder' },
      { label: 'Удаление папки', path: 'remove-folder' },
      { label: 'Изменение названия папки', path: 'edit-folder-name' },
      { label: 'Изменение режима доступа папки', path: 'edit-folder-access-type' },
      { label: 'Работа с папкой', path: 'work-inside-folder' },
    ]
  },
  {
    label: ApplicationSections.StudentReviews,
    items: [
      { label: 'Добавление отзыва', path: 'add-student-review' },
      { label: 'Удаление отзыва', path: 'remove-student-review' },
    ]
  },
];
