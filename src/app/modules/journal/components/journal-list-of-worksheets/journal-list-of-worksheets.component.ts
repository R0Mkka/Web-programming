import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorageService } from '@services/local-storage.service';
import { YesNoDialogService } from '@services/yes-no-dialog.service';
import { FoldersService } from '../../services/folders.service';

import { LocalStorageItems } from '@constants';
import { IFolder, AccessTypesText } from '@models/folder.models';
import { MAX_WORKSHEETS_COUNT, onRemoveDialogData } from './journal-list-of-worksheets.config';

@Component({
  selector: 'app-journal-list-of-worksheets',
  templateUrl: './journal-list-of-worksheets.component.html',
  styleUrls: ['./journal-list-of-worksheets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalListOfWorksheetsComponent implements OnInit {
  public folder: IFolder;

  constructor(
    public readonly yesNoDialog: YesNoDialogService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
    private readonly foldersSerivce: FoldersService
  ) { }

  public ngOnInit(): void {
    this.initFolder();
  }

  public get folderAccessType(): string {
    return AccessTypesText[this.folder.accessType];
  }

  public get worksheetCanBeAdded(): boolean {
    return this.folder.worksheets.length < MAX_WORKSHEETS_COUNT;
  }

  public renameCurrentFolder(): void {
    console.log('renameCurrentFolder');
  }

  public removeCurrentFolder(): void {
    this.yesNoDialog.open(onRemoveDialogData(this));
  }

  public removeFolder(): void {
    this.foldersSerivce.removeFolder$.next(this.folder);
    this.yesNoDialog.close();
    this.returnBack();
  }

  public addWorksheet(): void {
    this.folder.worksheets.push({
      id: `worksheet-${Date.now().toString()}`,
      title: Date.now().toString(),
      content: []
    });

    const folders: IFolder[] = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);

    folders.some((folder: IFolder) => {
      if (folder.id === this.folder.id) {
        folder.worksheets = this.folder.worksheets;

        return true;
      }
    });

    this.localStorageService
      .setAsObject<IFolder[]>(LocalStorageItems.Folders, folders);
  }

  public returnBack(): void {
    this.router.navigate(['/journal']);
  }

  private initFolder(): void {
    const folders: IFolder[] = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);

    const folderId: string = this.route.snapshot.paramMap.get('folderId');

    this.folder = folders.find((folder: IFolder) => folder.id === folderId);
  }
}
