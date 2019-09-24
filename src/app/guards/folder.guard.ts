import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FoldersService } from 'app/modules/journal/services/folders.service';

import { IFolder } from '@models/folder.models';

@Injectable({
  providedIn: 'root'
})
export class FolderGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly foldersService: FoldersService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<boolean> {
    return this.foldersService.getFolders()
      .pipe(
        map((folders: IFolder[]) => {
          const folderId: string = route.paramMap.get('folderId') as string;
          const folderToSearch = folders.find((folder: IFolder) => folder.id === folderId);

          if (!folderToSearch) {
            this.backToJournal();

            return false;
          }

          return true;
        })
      );
  }

  private backToJournal(): void {
    this.router.navigate(['/journal']);
  }
}
