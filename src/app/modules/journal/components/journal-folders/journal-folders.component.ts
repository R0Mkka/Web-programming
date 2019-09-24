import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { FoldersService } from '../../services/folders.service';
import { SpinnerService } from '@services/spinner.service';

import { InitFoldersAction, AddFolderAction, EditFolderAction } from '@store/actions/folders.actions';
import { IFolderSection, IFolder, AccessTypes } from '@models/folder.models';
import { folderSections } from './journal-folders.config';
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

  private readonly destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly foldersService: FoldersService,
    private readonly spinnerService: SpinnerService
  ) { }

  public ngOnInit(): void {
    this.spinnerService.show();
    this.initFolders();
    this.subOnFoldersCreation();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
  }

  public onDrop(event: any, section: IFolderSection): void {
    const folder: IFolder = event.dragData as IFolder;

    if (folder.accessType !== section.accessType) {
      this.spinnerService.show();

      const newFolder: IFolder = { ...folder, accessType: section.accessType };

      this.foldersService.editFolder(newFolder)
        .subscribe(_ => {
          this.store.dispatch(new EditFolderAction(newFolder))
            .pipe(
              takeUntil(this.destroySubscriptions$)
            )
            .subscribe(() => {
              this.spinnerService.hide();
            });
        });
    }
  }

  public isSectionEmpty(accessType: AccessTypes): Observable<boolean> {
    return this.folders$
      .pipe(
        map(
          (folders: IFolder[]) => folders.filter((folder: IFolder) => folder.accessType === accessType).length === 0
        )
      );
  }

  private initFolders(): void {
    this.foldersService.getFolders()
      .pipe(
        tap((folders: IFolder[]) => this.store.dispatch(new InitFoldersAction(folders)))
      )
      .subscribe(() => this.spinnerService.hide());
  }

  private subOnFoldersCreation(): void {
    this.foldersService.folderCreated$
      .pipe(
        takeUntil(this.destroySubscriptions$)
      )
      .subscribe((newFolder: IFolder) => {
        this.foldersService
          .addFolder(newFolder)
          .subscribe(_ => this.store.dispatch(new AddFolderAction(newFolder)));
      });
  }
}
