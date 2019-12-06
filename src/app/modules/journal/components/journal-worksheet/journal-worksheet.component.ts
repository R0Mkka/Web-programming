import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WorksheetKeyboardController } from './journal-worksheet-keyboard.controller';
import { RouteChangeWatcherService } from '../../services/route-change-watcher.service';
import { WorksheetsService } from '../../services/worksheets.service';
import { YesNoDialogService } from '@services/yes-no-dialog.service';

import { emptyWorksheeteData, removeWorksheetDialogData } from './journal-worksheet.config';
import { IColumn } from '@models/table.models';
import { IWorksheet } from '@models/worksheet.models';

@Component({
  selector: 'app-journal-worksheet',
  templateUrl: './journal-worksheet.component.html',
  styleUrls: ['./journal-worksheet.component.scss'],
  providers: [RouteChangeWatcherService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalWorksheetComponent implements OnInit, OnDestroy {
  public data$: BehaviorSubject<IColumn[]> = new BehaviorSubject<IColumn[]>([]);
  public focusedElementIndex: number;
  public currentWorksheet: IWorksheet;

  private subscriptionsDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly worksheetKeyboardController: WorksheetKeyboardController,
    private readonly routeChangesService: RouteChangeWatcherService,
    private readonly yesNoDialog: YesNoDialogService,
    private readonly worksheetsService: WorksheetsService,
    private readonly elementRef: ElementRef,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initData();
    this.worksheetKeyboardController.initKeyboardListeners(this);
    this.subOnRouteChanges();
  }

  public ngOnDestroy(): void {
    this.worksheetKeyboardController.destroyListeners();
    this.subscriptionsDestroy$.next();
  }

  public get dataStream(): Observable<IColumn[]> {
    return this.data$.asObservable();
  }

  public addStudent(): void {
    const columns: IColumn[] = this.data$.getValue();

    columns.forEach((column) => {
      column.cells.push('');
    });

    this.data$.next(columns);
  }

  public addDay(): void {
    const columns: IColumn[] = this.data$.getValue();

    const cells = columns[0] && columns[0].cells.length
      ? new Array(columns[0].cells.length).fill('')
      : [];

    columns.push({
      headerCell: '(пусто)',
      cells
    });

    this.data$.next(columns);
  }

  public openRemoveWorksheetDialog(): void {
    this.yesNoDialog.open(removeWorksheetDialogData(this));
  }

  public removeWorksheet(): void {
    // this.getCurrentState().then(([worksheet, folder, folderList]) => {
    //   folderList.some((singleFolder: IFolder) => {
    //     if (singleFolder.id === folder.id) {
    //       singleFolder.worksheets = singleFolder.worksheets.filter((singleWorksheet: IWorksheet) => {
    //         return singleWorksheet.id !== worksheet.id;
    //       });

    //       this.yesNoDialog.close();
    //       this.router.navigate(['/journal', folder.id]);
    //       this.foldersService.removeWorksheet$.next();

    //       return singleFolder.id === folder.id;
    //     }
    //   });
    // });
  }

  public async saveChanges(): Promise<void> {
    const columnsElements = [...this.elementRef.nativeElement.querySelectorAll('.column')];

    const updatedData: IColumn[] = columnsElements.map((column: HTMLDivElement) => {
      const inputs: HTMLInputElement[] = [].slice.call(column.querySelectorAll('input'), 0);
      const cells: string[] = inputs.map((input: HTMLInputElement) => input.value);

      if (column.classList.contains('left-column')) {
        return { headerCell: '', cells };
      }

      return {
        headerCell: column.querySelector('textarea').value,
        cells
      };
    });

    await this.getCurrentState();

    this.currentWorksheet.content = updatedData;

    this.worksheetsService.editWorksheet(this.currentWorksheet).subscribe();
  }

  public cellFocused(target: HTMLInputElement, index: number): void {
    target.select();
    target.classList.add('focused');

    this.focusedElementIndex = index;
  }

  public cellBlured(target: HTMLElement): void {
    target.classList.remove('focused');

    this.focusedElementIndex = null;
  }

  private initData(): void {
    this.data$.next(this.route.snapshot.data.worksheetData.content as IColumn[]);
  }

  private getCurrentState(): Promise<IWorksheet> {
    return new Promise(resolve => {
      setTimeout(() => {
        const { worksheetData } = this.route.snapshot.data;

        this.currentWorksheet = worksheetData;

        this.cdRef.markForCheck();

        resolve(worksheetData);
      }, 0);
    });
  }

  private subOnRouteChanges(): void {
    this.routeChangesService.routeChanged$.pipe(
      takeUntil(this.subscriptionsDestroy$)
    ).subscribe(_ => {
      console.log('changed');
      this.getCurrentState().then((worksheet) => {
        console.log(this.route.snapshot.data);
        this.data$.next(worksheet.content);

        this.cdRef.detectChanges();
      });
    });
  }
}
