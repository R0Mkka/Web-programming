import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { LocalStorageService } from '@services/local-storage.service';
import { YesNoDialogService } from '@services/yes-no-dialog.service';
import { FoldersService } from '../../services/folders.service';

import { DoubleStateFieldComponent, FieldStates } from '@shared/double-state-field/double-state-field.component';

import { AddWorksheetAction } from '@store/actions/worksheets.actions';
import { LocalStorageItems } from '@constants';
import { IFolder, AccessTypesText } from '@models/folder.models';
import { IWorksheet } from '@models/worksheet.models';
import { MAX_WORKSHEETS_COUNT, onRemoveDialogData } from './journal-list-of-worksheets.config';
import { emptyWorksheeteData } from '../journal-worksheet/journal-worksheet.config';
import { WorksheetsService } from '../../services/worksheets.service';

@Component({
  selector: 'app-journal-list-of-worksheets',
  templateUrl: './journal-list-of-worksheets.component.html',
  styleUrls: ['./journal-list-of-worksheets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalListOfWorksheetsComponent implements OnInit, OnDestroy {
  public folder: IFolder;
  public worksheets$: BehaviorSubject<IWorksheet[]> = new BehaviorSubject<IWorksheet[]>([]);

  private destroySubscriptions$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    public readonly yesNoDialog: YesNoDialogService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
    private readonly foldersSerivce: FoldersService,
    private readonly worksheetsService: WorksheetsService,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initFolder();
    this.initWorksheets();
    this.subOnWorksheetsRemove();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
  }

  public get worksheetsStream(): Observable<IWorksheet[]> {
    return this.worksheets$.asObservable();
  }

  public get folderAccessType(): string {
    if (!this.folder) {
      return AccessTypesText.Private;
    }

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
    const newWorksheet: IWorksheet = {
      folderId: this.folder.id,
      id: `worksheet-${Date.now().toString()}`,
      title: Date.now().toString(),
      content: emptyWorksheeteData
    };

    this.pushWorksheet(newWorksheet);
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
    this.folder = this.route.snapshot.data.folderData as IFolder;
  }

  private initWorksheets(): void {
    this.worksheetsService.getWorksheets(this.folder.id)
      .subscribe((worksheets: IWorksheet[]) => {
        this.worksheets$.next(worksheets);
      });
  }

  private subOnWorksheetsRemove(): void {
    this.foldersSerivce.removeWorksheet$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe(_ => {
      this.initFolder();

      this.cdRef.markForCheck();
    });
  }

  private pushWorksheet(newWorksheet: IWorksheet): void {
    const currentWorksheets: IWorksheet[] = this.worksheets$.getValue();

    currentWorksheets.push(newWorksheet);

    this.worksheets$.next(currentWorksheets);

    this.store.dispatch(new AddWorksheetAction(newWorksheet));

    this.worksheetsService.addWorksheet(newWorksheet).subscribe();
  }
}
