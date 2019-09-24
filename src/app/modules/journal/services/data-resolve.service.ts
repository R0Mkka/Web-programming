import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorageService } from '@services/local-storage.service';
import { WorksheetsService } from './worksheets.service';

import { IWorksheet } from '@models/worksheet.models';
import { IFolder } from '@models/folder.models';
import { map } from 'rxjs/operators';

type ReturnType = Observable<[IWorksheet, IFolder, IFolder[]]>;

@Injectable()
export class DataResolve implements Resolve<ReturnType> {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly worksheetsService: WorksheetsService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const worksheetId: string = route.paramMap.get('worksheetId');

    return this.worksheetsService.getWorksheetById(worksheetId);
  }

  private getCurrentFolder(route: ActivatedRouteSnapshot, folders: IFolder[]): IFolder {
    const { pathFromRoot } = route;
    const folderId: string = pathFromRoot[pathFromRoot.length - 2].paramMap.get('folderId');

    return folders.find((folder: IFolder) => folder.id === folderId);
  }
}
