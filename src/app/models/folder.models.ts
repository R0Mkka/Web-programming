export enum AccessTypes {
  Private = 'Private',
  Read = 'Read',
  ReadWrite = 'ReadWrite'
}

export interface IFolder {
  id: string;
  name: string;
  accessType: AccessTypes;
}

export interface IFolderSection {
  title: string;
  accessType: AccessTypes;
  matIcon?: string;
}
