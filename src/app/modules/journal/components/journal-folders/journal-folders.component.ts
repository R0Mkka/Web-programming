import { Component, ChangeDetectionStrategy } from '@angular/core';

enum AccessTypes {
  Closed = 'Closed',
  Read = 'Read',
  ReadWrite = 'ReadWrite'
}

interface IFolder {
  name: string;
  accessType: AccessTypes;
}

interface IFolderSection {
  title: string;
  folders: IFolder[];
}

const folders: IFolder[] = [
  { name: 'Группа 16-ИТ-1', accessType: AccessTypes.ReadWrite },
  { name: 'Группа 17-ИТ-2', accessType: AccessTypes.ReadWrite }
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
