import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';

import { LocalStorageItems } from '@constants';
import { IFolder } from '@models/folder.models';

@Injectable({
  providedIn: 'root'
})
export class FolderGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): boolean {
    if (!this.localStorageService.has(LocalStorageItems.Folders)) {
      this.backToJournal();

      return false;
    }

    const folders: IFolder[] = this.localStorageService.getAsObject<IFolder[]>(LocalStorageItems.Folders);

    if (folders.length === 0) {
      this.backToJournal();

      return false;
    }

    const folderId: string = route.paramMap.get('folderId') as string;
    const folderToSearch = folders.find((folder: IFolder) => folder.id === folderId);

    if (!folderToSearch) {
      this.backToJournal();

      return false;
    }

    return true;
  }

  private backToJournal(): void {
    this.router.navigate(['/journal']);
  }
}
