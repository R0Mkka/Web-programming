import { State, Action, StateContext } from '@ngxs/store';

import * as FoldersActions from '../actions/folders.actions';

import { IFolder } from '@models/folder.models';

type ctxType = StateContext<IFolder[]>;

@State<IFolder[]>({
  name: 'folders',
  defaults: []
})
export class FoldersState {
  @Action(FoldersActions.InitFoldersAction)
  public initFolders(ctx: ctxType, action: { folders: IFolder[] }): void {
    ctx.setState([
      ...ctx.getState(),
      ...action.folders
    ]);
  }

  @Action(FoldersActions.AddFolderAction)
  public addFolder(ctx: ctxType, action: { folder: IFolder }): void {
    ctx.setState([
      ...ctx.getState(),
      action.folder
    ]);
  }

  @Action(FoldersActions.DeleteFolderAction)
  public deleteFolder(ctx: ctxType, action: { folderId: string }): void {
    ctx.setState([
      ...ctx.getState().filter((folder: IFolder) => folder.id !== action.folderId)
    ]);
  }

  @Action(FoldersActions.EditFolderAction)
  public editFolder(ctx: ctxType, action: { folder: IFolder }): void {
    ctx.setState([
      ...ctx.getState().map((folder: IFolder) => {
        if (folder.id === action.folder.id) {
          return action.folder;
        }

        return folder;
      })
    ]);
  }
}
