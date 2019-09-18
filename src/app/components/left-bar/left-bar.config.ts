import { ILink } from '@models/link.models';

import { ApplicationSections } from '@constants';

export const menuItems: ILink[] = [
  { label: ApplicationSections.Subjects, path: '/subjects', matIcon: 'menu_book' },
  { label: ApplicationSections.Schedule, path: '/schedule', matIcon: 'schedule' },
  { label: ApplicationSections.Journal, path: '/journal', matIcon: 'view_list' },
  { label: ApplicationSections.Supervision, path: '/supervision', matIcon: 'supervisor_account' },
  { label: ApplicationSections.StudentReviews, path: '/student-reviews', matIcon: 'comment' },
  { label: ApplicationSections.Help, path: '/help', matIcon: 'help' }
];
