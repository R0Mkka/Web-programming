import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';
import { Store } from '@ngxs/store';

import { FoldersService } from '../../services/folders.service';
import { LocalStorageService } from '@services/local-storage.service';

import { InitFoldersAction, AddFolderAction, EditFolderAction } from '@store/actions/folders.actions';
import { IFolderSection, IFolder, AccessTypes } from '@models/folder.models';
import { folderSections } from './journal-folders.config';
import { LocalStorageItems } from '@constants';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-journal-folders',
  templateUrl: './journal-folders.component.html',
  styleUrls: ['./journal-folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalFoldersComponent implements OnInit, OnDestroy {
  @Select(state => state.folders)
  public folders$: Observable<IFolder[]>;

  public readonly folderSections: IFolderSection[] = folderSections;
  public folders: IFolder[];

  private readonly destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly foldersService: FoldersService,
    private readonly localStorageService: LocalStorageService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initFolders();
    this.subOnFoldersCreation();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
  }

  public onDrop(event: any, section: IFolderSection): void {
    const folder: IFolder = event.dragData as IFolder;

    if (folder.accessType !== section.accessType) {
      const newFolder: IFolder = { ...folder, accessType: section.accessType };

      this.foldersService.editFolder(newFolder)
        .subscribe(_ => this.store.dispatch(new EditFolderAction(newFolder)));
    }
  }

  public isSectionEmpty(accessType: AccessTypes): Observable<boolean> {
    return this.folders$.pipe(
      map((folders: IFolder[]) => folders.filter((folder: IFolder) => {
        return folder.accessType === accessType;
      }).length === 0)
    );
  }

  private initFolders(): void {
    this.foldersService.initFolders().pipe(
      tap((folders: IFolder[]) => this.store.dispatch(new InitFoldersAction(folders)))
    ).subscribe();

    if (this.localStorageService.has(LocalStorageItems.Folders)) {
      this.folders = this.localStorageService
        .getAsObject<IFolder[]>(LocalStorageItems.Folders);

      return;
    }

    this.folders = [];
    this.localStorageService.setAsObject(LocalStorageItems.Folders, []);
  }

  private subOnFoldersCreation(): void {
    this.foldersService.folderCreated$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe((newFolder: IFolder) => {
      this.foldersService.addFolder(newFolder)
        .subscribe(_ => this.store.dispatch(new AddFolderAction(newFolder)));
    });
  }
}
