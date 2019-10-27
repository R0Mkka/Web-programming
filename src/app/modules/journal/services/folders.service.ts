import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, share } from 'rxjs/operators';

import { IFolder } from '@models/folder.models';
import { SERVER_URL, DBTables } from '@constants';
import { DeleteFolderAction } from '@store/actions/folders.actions';

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
    private readonly store: Store,
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

  public deleteFolder(folderId: string): Observable<any> {
    return this.http.delete<any>(`${SERVER_URL}/${DBTables.Folders}/${folderId}`);
  }

  public editFolder(folder: IFolder): Observable<IFolder> {
    return this.http.patch<IFolder>(`${SERVER_URL}/${DBTables.Folders}/${folder.id}`, folder);
  }

  private subOnFoldersRemove(): void {
    this.removeFolder$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe((folder: IFolder) => {
      this.deleteFolder(folder.id).subscribe(_ => {
        this.store.dispatch(new DeleteFolderAction(folder.id));
      });
    });
  }
}
