
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NewFolderService } from '../../services/new-folder.service';
import { LocalStorageService } from '@services/local-storage.service';

import { IFolderSection, IFolder, AccessTypes } from '@models/folder.models';
import { folderSections } from './journal-folders.config';
import { LocalStorageItems } from '@constants';

@Component({
  selector: 'app-journal-folders',
  templateUrl: './journal-folders.component.html',
  styleUrls: ['./journal-folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalFoldersComponent implements OnInit, OnDestroy {
  public readonly folderSections: IFolderSection[] = folderSections;
  public folders: IFolder[];

  private readonly destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(
    private readonly newFolderService: NewFolderService,
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

  public isSectionEmpty(accessType: AccessTypes): boolean {
    return this.folders
      .filter((folder: IFolder) => folder.accessType === accessType).length === 0;
  }

  private initFolders(): void {
    if (this.localStorageService.has(LocalStorageItems.Folders)) {
      this.folders = this.localStorageService
        .getAsObject<IFolder[]>(LocalStorageItems.Folders);

      return;
    }

    this.folders = [];
    this.localStorageService.setAsObject(LocalStorageItems.Folders, []);
  }

  private subOnFoldersCreation(): void {
    this.newFolderService.folderCreated$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe((newFolder: IFolder) => {
      this.folders.push(newFolder);
      this.cdRef.markForCheck();
      this.saveToLocalStorage();
    });
  }

  private saveToLocalStorage(): void {
    this.localStorageService.setAsObject<IFolder[]>(
      LocalStorageItems.Folders,
      this.folders
    );
  }
}
