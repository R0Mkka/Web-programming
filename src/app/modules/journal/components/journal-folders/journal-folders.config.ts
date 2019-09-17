import { IFolder, AccessTypes, IFolderSection } from '@models/folder.models';

export const folders: IFolder[] = [
  {
    name: 'Группа 16-ИТ-1',
    link: 'folder-123456789',
    accessType: AccessTypes.ReadWrite
  },
  {
    name: 'Группа 17-ИТ-2',
    link: 'folder-987654321',
    accessType: AccessTypes.ReadWrite
  }
];

export const folderSections: IFolderSection[] = [
  { title: 'Папки с полным доступом', accessType: AccessTypes.ReadWrite },
  { title: 'Папки только для чтения', accessType: AccessTypes.Read },
  { title: 'Приватные папки', accessType: AccessTypes.Private }
];
