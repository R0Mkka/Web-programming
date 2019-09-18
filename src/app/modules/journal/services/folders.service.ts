import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LocalStorageService } from '@services/local-storage.service';

import { IFolder } from '@models/folder.models';
import { LocalStorageItems } from '@constants';

@Injectable({
  providedIn: 'root'
})
export class FoldersService implements OnDestroy {
  public readonly folderCreated$: Subject<IFolder> = new Subject<IFolder>();
  public readonly removeFolder$: Subject<IFolder> = new Subject<IFolder>();

  private destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(private readonly localStorageService: LocalStorageService) {
    this.subOnFoldersRemove();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
  }

  private subOnFoldersRemove(): void {
    this.removeFolder$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe((folder: IFolder) => {
      const updatedFolders: IFolder[] = this.localStorageService
        .getAsObject<IFolder[]>(LocalStorageItems.Folders)
        .filter((singleFolder: IFolder) => {
          return singleFolder.id !== folder.id;
        });

      this.localStorageService
        .setAsObject<IFolder[]>(LocalStorageItems.Folders, updatedFolders);
    });
  }
}
