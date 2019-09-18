import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { LocalStorageService } from '@services/local-storage.service';

import { IWorksheet } from '@models/worksheet.models';
import { IFolder } from '@models/folder.models';
import { LocalStorageItems } from '@constants';

type ReturnType = [IWorksheet, IFolder, IFolder[]];

@Injectable()
export class DataResolve implements Resolve<ReturnType> {
  private folders: IFolder[];
  private folder: IFolder;

  constructor(
    private readonly localStorageService: LocalStorageService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): ReturnType {
    const worksheetId: string = route.paramMap.get('worksheetId');

    this.initFolders();
    this.initFolder(route);

    const singleWorksheet: IWorksheet = this.folder.worksheets
      .find((worksheet: IWorksheet) => worksheet.id === worksheetId);

    return [singleWorksheet, this.folder, this.folders];
  }

  private initFolders(): void {
    this.folders = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);
  }

  private initFolder(route: ActivatedRouteSnapshot): void {
    const { pathFromRoot } = route;
    const folderId: string = pathFromRoot[pathFromRoot.length - 2].paramMap.get('folderId');

    this.folder = this.folders
      .find((folder: IFolder) => folder.id === folderId);
  }
}
