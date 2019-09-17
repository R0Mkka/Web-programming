import { Validators } from '@angular/forms';

import { ICustomField } from '@models/forms';

export const newFolderFormConfig: ICustomField[] = [
  {
    id: 'folder-name',
    type: 'text',
    label: 'Название папки',
    placeholder: 'Введите название папки',
    matIcon: 'folder',
    control: {
      name: 'folderName',
      initialValue: 'Новая папка',
      validators: [Validators.required, Validators.maxLength(40)]
    }
  },
  {
    id: 'folder-access-type',
    type: 'text',
    label: 'Доступность папки',
    placeholder: 'Введите доступность папки',
    matIcon: 'folder_shared',
    control: {
      name: 'folderAccessType',
      initialValue: 'Приватная',
      validators: [Validators.required, Validators.maxLength(40)]
    }
  }
];
