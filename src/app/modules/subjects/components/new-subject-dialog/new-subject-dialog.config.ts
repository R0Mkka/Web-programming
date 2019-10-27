import { Validators } from '@angular/forms';

import { ICustomField } from '@models/forms';

export const subjectFormConfig: ICustomField[] = [
  {
    id: 'subject-title',
    type: 'text',
    label: 'Название дисциплины',
    placeholder: 'Введите название дисциплины',
    matIcon: 'title',
    control: {
      name: 'subjectTitle',
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(50)]
    }
  },
  {
    id: 'subject-description',
    type: 'text',
    label: 'Описание курса',
    placeholder: 'Введите описание курса',
    matIcon: 'description',
    control: {
      name: 'subjectDescription',
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(255)]
    }
  },
  {
    id: 'subject-course-number',
    type: 'number',
    label: 'Дисциплина для курса',
    placeholder: 'Введите номер курса',
    matIcon: 'school',
    control: {
      name: 'subjectCourseNumber',
      initialValue: '',
      validators: [Validators.required, Validators.max(6)]
    }
  }
];
