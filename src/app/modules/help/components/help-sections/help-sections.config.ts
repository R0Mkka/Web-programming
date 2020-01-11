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
    ]
  },
  {
    label: ApplicationSections.Journal,
    items: [
      { label: 'Создание новой папки', path: 'create-folder' },
      { label: 'Удаление папки', path: 'remove-folder' },
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
