import { Validators } from '@angular/forms';

import { ICustomField, ControlTypes } from '@models/forms';

export enum AccessTypesText {
  ReadWrite = 'Полный доступ',
  Read = 'Только для чтения',
  Private = 'Приватная'
}

export const newFolderFormConfig: ICustomField[] = [
  {
    id: 'folder-name',
    type: 'text',
    label: 'Название папки',
    placeholder: 'Введите название папки',
    matIcon: 'folder',
    control: {
      type: ControlTypes.Input,
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
      type: ControlTypes.Select,
      name: 'folderAccessType',
      initialValue: AccessTypesText.Private,
      values: [AccessTypesText.ReadWrite, AccessTypesText.Read, AccessTypesText.Private],
      validators: [Validators.required]
    }
  }
];
