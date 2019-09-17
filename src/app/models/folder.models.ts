export enum AccessTypes {
  Private = 'Private',
  Read = 'Read',
  ReadWrite = 'ReadWrite'
}

export interface IFolder {
  name: string;
  link: string;
  accessType: AccessTypes;
}

export interface IFolderSection {
  title: string;
  accessType: AccessTypes;
}
