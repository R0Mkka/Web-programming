import { IFolder, AccessTypes, IFolderSection } from '@models/folder.models';

export const folders: IFolder[] = [
  {
    id: 'folder-123456789',
    name: 'Группа 16-ИТ-1',
    accessType: AccessTypes.ReadWrite,
    worksheets: []
  },
  {
    id: 'folder-987654321',
    name: 'Группа 17-ИТ-2',
    accessType: AccessTypes.ReadWrite,
    worksheets: []
  }
];

export const folderSections: IFolderSection[] = [
  { title: 'Папки с полным доступом', matIcon: 'folder_open', accessType: AccessTypes.ReadWrite },
  { title: 'Папки только для чтения', matIcon: 'folder_shared', accessType: AccessTypes.Read },
  { title: 'Приватные папки', matIcon: 'folder', accessType: AccessTypes.Private }
];
