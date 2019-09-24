import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FoldersService } from './folders.service';

import { IFolder } from '@models/folder.models';

type ResolveType = Observable<IFolder>;

@Injectable()
export class FolderResolver implements Resolve<ResolveType> {
  constructor(
    private readonly foldersService: FoldersService
  ) {}

  public resolve(route: ActivatedRouteSnapshot): ResolveType {
    return this.foldersService.getFolders()
      .pipe(
        map((folders: IFolder[]) => {
          const folderId: string = route.paramMap.get('folderId');

          return folders.find((folder: IFolder) => folder.id === folderId);
        })
      );
  }
}
