import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

import { WorksheetKeyboardController } from './journal-worksheet-keyboard.controller';

import { IColumn, tableData } from './journal-worksheet.config';

@Component({
  selector: 'app-journal-worksheet',
  templateUrl: './journal-worksheet.component.html',
  styleUrls: ['./journal-worksheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalWorksheetComponent implements OnInit, OnDestroy {
  public data: IColumn[] = tableData;

  public focusedElement: any;

  constructor(
    private readonly worksheetKeyboardController: WorksheetKeyboardController
  ) { }

  public ngOnInit(): void {
    this.initKeysListeners();
  }

  public ngOnDestroy(): void {
    document.onkeydown = null;
  }

  public addDay(): void {
    const cells = this.data[0] && this.data[0].cells.length
      ? new Array(this.data[0].cells.length).fill('')
      : [];

    this.data.push({
      headerCell: '(empty)',
      cells
    });
  }

  public addStudent(): void {
    this.data.forEach((column) => {
      column.cells.push('');
    });
  }

  public cellFocused(target: HTMLInputElement, index: number): void {
    target.select();
    target.classList.add('focused');

    this.focusedElement = {
      elemementRef: target,
      index
    };
  }

  public cellBlured(target: HTMLElement): void {
    target.classList.remove('focused');

    this.focusedElement = null;
  }

  public cellClicked(event: MouseEvent): void {
    event.stopPropagation();

    const target: HTMLElement = event.target as HTMLElement;
    const firstChild: HTMLElement = target.firstChild as HTMLElement;

    if (firstChild) {
      firstChild.focus();
    }
  }

  private initKeysListeners(): void {
    document.onwheel = (event: WheelEvent) => {
      // console.log(event);
    };

    document.onkeydown = (event: KeyboardEvent) => {
      const target: HTMLInputElement = event.target as HTMLInputElement;

      if (!this.focusedElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
        case 'Enter':
          this.worksheetKeyboardController.moveDown(target, this.focusedElement.index);
          break;
        case 'ArrowUp':
          this.worksheetKeyboardController.moveUp(target, this.focusedElement.index);
          break;
        case 'ArrowRight':
          this.worksheetKeyboardController.moveRight(target);
          break;
        case 'ArrowLeft':
          this.worksheetKeyboardController.moveLeft(target);
          break;
        default:
          break;
      }
    };
  }
}
