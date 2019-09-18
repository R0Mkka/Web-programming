import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LocalStorageService } from '@services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { IFolder } from '@models/folder.models';
import { IWorksheet } from '@models/worksheet.models';

@Injectable({
  providedIn: 'root'
})
export class FolderWorksheetGuard implements CanActivateChild {
  constructor(
    private readonly router: Router,
    private localStorageService: LocalStorageService
  ) { }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, _: RouterStateSnapshot): boolean {
    const pathFromRoot = childRoute.pathFromRoot;
    const folderId: string = pathFromRoot[pathFromRoot.length - 2].paramMap.get('folderId');
    const worksheetId: string = childRoute.paramMap.get('worksheetId');

    const folderToSearch: IFolder = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders)
      .find((folder: IFolder) => folder.id === folderId);

    const worksheetToSearch = folderToSearch.worksheets
      .find((worksheet: IWorksheet) => worksheet.id === worksheetId);

    if (!!worksheetToSearch) {
      return true;
    }

    this.router.navigate(['/journal', folderId]);

    return false;
  }
}
