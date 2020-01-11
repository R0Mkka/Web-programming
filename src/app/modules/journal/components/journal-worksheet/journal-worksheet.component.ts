import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WorksheetKeyboardController } from './journal-worksheet-keyboard.controller';
import { RouteChangeWatcherService } from '../../services/route-change-watcher.service';
import { WorksheetsService } from '../../services/worksheets.service';
import { FoldersService } from '../../services/folders.service';
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
    private router: Router,
    private readonly worksheetKeyboardController: WorksheetKeyboardController,
    private readonly routeChangesService: RouteChangeWatcherService,
    private readonly yesNoDialog: YesNoDialogService,
    private readonly worksheetsService: WorksheetsService,
    private foldersService: FoldersService,
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

  public async openRemoveWorksheetDialog(event: MouseEvent): Promise<void> {
    const target = event.target as HTMLElement;

    target.blur();

    this.currentWorksheet = await this.getCurrentState();

    this.yesNoDialog.open(removeWorksheetDialogData(this));
  }

  public removeWorksheet(): void {
    this.worksheetsService.deleteWorksheet(this.currentWorksheet.id).subscribe(() => {
      this.foldersService.removeWorksheet$.next(this.currentWorksheet as any);

      this.yesNoDialog.close();
    });
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

    this.currentWorksheet = await this.getCurrentState();

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
    this.worksheetsService.getWorksheetById(this.route.snapshot.params.worksheetId)
        .subscribe(value => {
          this.data$.next(value.content);

          this.cdRef.detectChanges();
        });
  }

  private getCurrentState(): Promise<IWorksheet> {
    return new Promise(resolve => {
      setTimeout(() => {

        this.worksheetsService.getWorksheetById(this.route.snapshot.params.worksheetId)
          .subscribe(value => {
            resolve(value);
          });
      }, 0);
    });
  }

  private subOnRouteChanges(): void {
    this.routeChangesService.routeChanged$.pipe(
      takeUntil(this.subscriptionsDestroy$)
    ).subscribe(_ => {
      this.initData();
    });
  }
}
