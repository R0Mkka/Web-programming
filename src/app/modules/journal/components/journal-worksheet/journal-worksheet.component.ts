import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, of, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WorksheetKeyboardController } from './journal-worksheet-keyboard.controller';
import { LocalStorageService } from '@services/local-storage.service';
import { RouteChangeWatcherService } from '../../services/route-change-watcher.service';

import { emptyWorksheeteData } from './journal-worksheet.config';
import { IColumn } from '@models/table.models';
import { IFolder } from '@models/folder.models';
import { IWorksheet } from '@models/worksheet.models';
import { LocalStorageItems } from '@constants';

@Component({
  selector: 'app-journal-worksheet',
  templateUrl: './journal-worksheet.component.html',
  styleUrls: ['./journal-worksheet.component.scss'],
  providers: [RouteChangeWatcherService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalWorksheetComponent implements OnInit, OnDestroy {
  public data: Observable<IColumn[]>;
  public focusedElementIndex: number;

  private subscriptionsDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly worksheetKeyboardController: WorksheetKeyboardController,
    private readonly localStorageService: LocalStorageService,
    private readonly routeChangesService: RouteChangeWatcherService,
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

  public addStudent(): void {
    const localSub: Subscription = this.data.subscribe((columns: IColumn[]) => {
      columns.forEach((column) => {
        column.cells.push('');
      });

      this.data = of(columns);
    });

    localSub.unsubscribe();
  }

  public addDay(): void {
    const localSub: Subscription = this.data.subscribe((columns: IColumn[]) => {
      const cells = columns[0] && columns[0].cells.length
        ? new Array(columns[0].cells.length).fill('')
        : [];

      columns.push({
        headerCell: '(пусто)',
        cells
      });

      this.data = of(columns);
    });

    localSub.unsubscribe();
  }

  public saveChanges(): void {
    const columnsElements = [...this.elementRef.nativeElement.querySelectorAll('.column')];
    this.getCurrentState().then(([worksheet, folder, folderList]) => {
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

      folderList.some((singleFolder: IFolder) => {
        if (singleFolder.id === folder.id) {
          singleFolder.worksheets.some((singleWorksheet: IWorksheet) => {
            if (singleWorksheet.id === worksheet.id) {
              singleWorksheet.content = updatedData;
            }

            return singleWorksheet.id === worksheet.id;
          });

          return singleFolder.id === folder.id;
        }
      });

      this.localStorageService.setAsObject<IFolder[]>(LocalStorageItems.Folders, folderList);
    });
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
    this.getCurrentState().then(([worksheet]) => {
      const { content } = worksheet;

      this.data = content && content.length !== 0
        ? of(content)
        : of(emptyWorksheeteData);

      this.cdRef.markForCheck();
    });
  }

  private getCurrentState(): Promise<[IWorksheet, IFolder, IFolder[]]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.route.snapshot.data.worksheetData);
      }, 0);
    });
  }

  private subOnRouteChanges(): void {
    this.routeChangesService.routeChanged$.pipe(
      takeUntil(this.subscriptionsDestroy$)
    ).subscribe(_ => {
      this.getCurrentState().then(([worksheet]) => {
        console.log(worksheet);
        this.data = of(worksheet.content);

        this.cdRef.markForCheck();
      });
    });
  }
}
