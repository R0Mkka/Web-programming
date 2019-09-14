import { Validators } from '@angular/forms';

import { ICustomField } from '@models/forms';
import { StudentReviewFields } from '@models/review.models';

export const studentReviewFormConfig: ICustomField[] = [
  {
    id: 'student-full-name',
    type: 'text',
    label: 'Полное имя студента',
    placeholder: 'Введите полное имя студента',
    matIcon: 'school',
    control: {
      name: StudentReviewFields.studentFullName,
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(50)]
    }
  },
  {
    id: 'student-group',
    type: 'text',
    label: 'Группа студента',
    placeholder: 'Введите группу студента',
    matIcon: 'people',
    control: {
      name: StudentReviewFields.studentGroup,
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(18)]
    }
  },
  {
    id: 'review-text',
    type: 'text',
    label: 'Текст отзыва',
    placeholder: 'Введите текст отзыва',
    matIcon: 'comment',
    control: {
      name: StudentReviewFields.text,
      initialValue: '',
      validators: [Validators.required, Validators.maxLength(256)]
    }
  }
];
