import { Validators } from '@angular/forms';

import { ICustomField } from '@models/forms';
import { FieldTypes } from '@constants';

export const singleSubjectFormConfig: ICustomField[] = [
  {
    id: 'title',
    type: FieldTypes.Text,
    label: 'Дисциплина',
    placeholder: 'Введите название дисциплины',
    control: {
      name: 'title',
      initialValue: '',
      validators: [Validators.required]
    }
  },
  {
    id: 'group',
    type: FieldTypes.Text,
    label: 'Группа',
    placeholder: 'Введите группу',
    control: {
      name: 'group',
      initialValue: '',
      validators: [Validators.required]
    }
  },
  {
    id: 'lectureRoom',
    type: FieldTypes.Text,
    label: 'Аудитория',
    placeholder: 'Введите аудиторию',
    control: {
      name: 'lectureRoom',
      initialValue: '',
      validators: [Validators.required]
    }
  }
];
