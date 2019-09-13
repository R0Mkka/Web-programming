import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IFolder, AccessTypes, IFolderSection } from '@models/folder.models';

const folders: IFolder[] = [
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

@Component({
  selector: 'app-journal-folders',
  templateUrl: './journal-folders.component.html',
  styleUrls: ['./journal-folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalFoldersComponent {
  public readonly folderSections: IFolderSection[] = [
    { title: 'Папки с полным доступом', folders },
    { title: 'Папки только для чтения', folders },
    { title: 'Приватные папки', folders }
  ];
}
