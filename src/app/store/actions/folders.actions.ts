import { IFolder } from '@models/folder.models';

export const ACTIONS_TYPE = '[Folders]';

export class InitFoldersAction {
  static readonly type = `${ACTIONS_TYPE} InitFolders`;

  constructor(public folders: IFolder[]) {}
}

export class AddFolderAction {
  static readonly type = `${ACTIONS_TYPE} AddFolder`;

  constructor(public folder: IFolder) {}
}

export class DeleteFolderAction {
  static readonly type = `${ACTIONS_TYPE} DeleteFolder`;

  constructor(public folderId: string) {}
}

export class EditFolderAction {
  static readonly type = `${ACTIONS_TYPE} EditFolder`;

  constructor(public folder: IFolder) {}
}
