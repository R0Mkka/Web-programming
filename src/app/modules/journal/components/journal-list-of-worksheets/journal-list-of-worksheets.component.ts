import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LocalStorageService } from '@services/local-storage.service';
import { YesNoDialogService } from '@services/yes-no-dialog.service';
import { FoldersService } from '../../services/folders.service';

import { DoubleStateFieldComponent, FieldStates } from '@shared/double-state-field/double-state-field.component';

import { LocalStorageItems } from '@constants';
import { IFolder, AccessTypesText } from '@models/folder.models';
import { IWorksheet } from '@models/worksheet.models';
import { MAX_WORKSHEETS_COUNT, onRemoveDialogData } from './journal-list-of-worksheets.config';
import { emptyWorksheeteData } from '../journal-worksheet/journal-worksheet.config';

@Component({
  selector: 'app-journal-list-of-worksheets',
  templateUrl: './journal-list-of-worksheets.component.html',
  styleUrls: ['./journal-list-of-worksheets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalListOfWorksheetsComponent implements OnInit, OnDestroy {
  public folder: IFolder;

  private destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(
    public readonly yesNoDialog: YesNoDialogService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
    private readonly foldersSerivce: FoldersService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initFolder();
    this.subOnWorksheetsRemove();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
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
      content: emptyWorksheeteData
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

  public changeFolderNameState(componentRef: DoubleStateFieldComponent): void {
    const currentState: FieldStates = componentRef.currentState;

    componentRef.state = (currentState === FieldStates.Text)
      ? FieldStates.Input
      : FieldStates.Text;
  }

  public changeFolderName(newName: string): void {
    const folders: IFolder[] = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);

    folders.some((folder: IFolder) => {
      if (folder.id === this.folder.id) {
        folder.name = newName;

        this.folder = folder;

        return true;
      }
    });

    this.cdRef.markForCheck();

    this.localStorageService
      .setAsObject<IFolder[]>(LocalStorageItems.Folders, folders);
  }

  public changeWorksheetTitleState(componentRef: DoubleStateFieldComponent): void {
    const currentState: FieldStates = componentRef.currentState;

    componentRef.state = (currentState === FieldStates.Text)
      ? FieldStates.Input
      : FieldStates.Text;
  }

  public setNewWorksheetTitle(newTitle: string, worksheet: IWorksheet): void {
    worksheet.title = newTitle;

    this.folder.worksheets.some((singleWorksheet: IWorksheet) => {
      if (singleWorksheet.id === worksheet.id) {
        singleWorksheet = worksheet;
      }

      return singleWorksheet.id === worksheet.id;
    });

    const folders: IFolder[] = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);

    folders.some((folder: IFolder) => {
      if (folder.id === this.folder.id) {
        folder.worksheets = this.folder.worksheets;

        return true;
      }
    });

    this.cdRef.markForCheck();

    this.localStorageService
      .setAsObject<IFolder[]>(LocalStorageItems.Folders, folders);
  }

  private initFolder(): void {
    const folders: IFolder[] = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders);

    const folderId: string = this.route.snapshot.paramMap.get('folderId');

    this.folder = folders.find((folder: IFolder) => folder.id === folderId);
  }

  private subOnWorksheetsRemove(): void {
    this.foldersSerivce.removeWorksheet$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe(_ => {
      this.initFolder();

      this.cdRef.markForCheck();
    });
  }
}
