import { IWorksheet } from './worksheet.models';

export enum AccessTypes {
  Private = 'Private',
  Read = 'Read',
  ReadWrite = 'ReadWrite'
}

export enum AccessTypesText {
  ReadWrite = 'Полный доступ',
  Read = 'Только для чтения',
  Private = 'Приватная'
}

export interface IFolder {
  id: string;
  name: string;
  accessType: AccessTypes;
  worksheets: IWorksheet[];
}

export interface IFolderSection {
  title: string;
  accessType: AccessTypes;
  matIcon?: string;
}
