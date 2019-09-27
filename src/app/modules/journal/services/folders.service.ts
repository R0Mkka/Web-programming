import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { takeUntil, share } from 'rxjs/operators';

import { LocalStorageService } from '@services/local-storage.service';

import { IFolder } from '@models/folder.models';
import { LocalStorageItems, SERVER_URL, DBTables } from '@constants';

@Injectable({
  providedIn: 'root'
})
export class FoldersService implements OnDestroy {
  public readonly folderCreated$: Subject<IFolder> = new Subject<IFolder>();
  public readonly removeFolder$: Subject<IFolder> = new Subject<IFolder>();
  public readonly removeWorksheet$: Subject<void> = new Subject<void>();

  private destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {
    this.subOnFoldersRemove();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
  }

  public getFolders(): Observable<IFolder[]> {
    return this.http.get<IFolder[]>(`${SERVER_URL}/${DBTables.Folders}`)
      .pipe(share());
  }

  public getFolderById(folderId: string): Observable<IFolder> {
    return this.http.get<IFolder>(`${SERVER_URL}/${DBTables.Folders}/${folderId}`);
  }

  public addFolder(folder: IFolder): Observable<IFolder> {
    return this.http.post<IFolder>(`${SERVER_URL}/${DBTables.Folders}`, folder);
  }

  public deleteFolder(): void {
    // some comments here
    // some more comments
    // and
    // even
    // more
  }

  public editFolder(folder: IFolder): Observable<IFolder> {
    return this.http.patch<IFolder>(`${SERVER_URL}/${DBTables.Folders}/${folder.id}`, folder);
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
