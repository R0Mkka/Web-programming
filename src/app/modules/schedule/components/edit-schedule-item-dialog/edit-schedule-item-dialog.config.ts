import { Validators } from '@angular/forms';

import { ICustomField } from '@models/forms';
import { FieldTypes } from '@constants';

export const editScheduleItemFormConfig: ICustomField[] = [
  {
    id: 'title',
    type: FieldTypes.Text,
    label: 'Дисциплина',
    placeholder: 'Введите название дисциплины',
    matIcon: 'menu_book',
    control: {
      name: 'title',
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(50)]
    }
  },
  {
    id: 'group',
    type: FieldTypes.Text,
    label: 'Группа',
    placeholder: 'Введите группу',
    matIcon: 'people',
    control: {
      name: 'group',
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(20)]
    }
  },
  {
    id: 'lectureRoom',
    type: FieldTypes.Text,
    label: 'Аудитория',
    placeholder: 'Введите аудиторию',
    matIcon: 'meeting_room',
    control: {
      name: 'lectureRoom',
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(14)]
    }
  }
];
