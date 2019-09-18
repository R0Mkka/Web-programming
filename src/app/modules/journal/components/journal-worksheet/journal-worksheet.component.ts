import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorksheetKeyboardController } from './journal-worksheet-keyboard.controller';
import { LocalStorageService } from '@services/local-storage.service';

import { emptyTableData } from './journal-worksheet.config';
import { IColumn } from '@models/table.models';
import { IFolder } from '@models/folder.models';
import { IWorksheet } from '@models/worksheet.models';
import { LocalStorageItems } from '@constants';

@Component({
  selector: 'app-journal-worksheet',
  templateUrl: './journal-worksheet.component.html',
  styleUrls: ['./journal-worksheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalWorksheetComponent implements OnInit, OnDestroy {
  public data: IColumn[];
  public localDataCopy: IColumn[];

  public focusedElementIndex: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly worksheetKeyboardController: WorksheetKeyboardController,
    private readonly localStorageService: LocalStorageService
  ) { }

  public ngOnInit(): void {
    this.initData();
    this.initKeysListeners();
  }

  public ngOnDestroy(): void {
    document.onkeydown = null;
  }

  public addStudent(): void {
    this.data.forEach((column) => {
      column.cells.push('');
    });

    // TODO
    this.localDataCopy = Object.assign(this.localDataCopy, {
      ...this.data.map((column: IColumn) => ({
        ...column,
        cells: [...column.cells]
      }))
    });
  }

  public addDay(): void {
    const cells = this.data[0] && this.data[0].cells.length
      ? new Array(this.data[0].cells.length).fill('')
      : [];

    this.data.push({
      headerCell: '(пусто)',
      cells
    });

    this.localDataCopy = Object.assign(this.localDataCopy, {
      ...this.data.map((column: IColumn) => ({
        ...column,
        cells: [...column.cells]
      }))
    });
  }

  public saveChanges(): void {
    console.log(this.localDataCopy);
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

  public onCellInput(event: KeyboardEvent, columnIndex: number, cellIndex: number): void {
    this.localDataCopy[columnIndex].cells[cellIndex] = (event.target as HTMLInputElement).value;
  }

  private initData(): void {
    const routeSnapshot = this.route.snapshot;
    const { pathFromRoot } = routeSnapshot;
    const folderId: string = pathFromRoot[pathFromRoot.length - 2].paramMap.get('folderId') as string;
    const worksheetId: string = routeSnapshot.paramMap.get('worksheetId') as string;

    const { content } = this.localStorageService
      .getAsObject<IFolder[]>(LocalStorageItems.Folders)
      .find((folder: IFolder) => folder.id === folderId)
      .worksheets.find((worksheet: IWorksheet) => worksheet.id === worksheetId);

    this.data = content && content.length !== 0
      ? content
      : emptyTableData;

      // TODO
    this.localDataCopy = {
        ...this.data.map((column: IColumn) => ({
          ...column,
          cells: [...column.cells]
        }))
    };
  }

  private initKeysListeners(): void {
    document.onkeydown = (event: KeyboardEvent) => {
      const target: HTMLInputElement = event.target as HTMLInputElement;

      if (this.focusedElementIndex === null) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
        case 'Enter':
          this.worksheetKeyboardController.moveDown(target);
          break;
        case 'ArrowUp':
          this.worksheetKeyboardController.moveUp(target);
          break;
        case 'ArrowRight':
          this.worksheetKeyboardController.moveRight(target, this.focusedElementIndex);
          break;
        case 'ArrowLeft':
          this.worksheetKeyboardController.moveLeft(target, this.focusedElementIndex);
          break;
        default:
          break;
      }
    };
  }
}
