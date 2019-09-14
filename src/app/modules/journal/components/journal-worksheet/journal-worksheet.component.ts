import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { WorksheetKeyboardController } from './journal-worksheet-keyboard.controller';

import { tableDatesConfig, data } from './journal-worksheet.config';

@Component({
  selector: 'app-journal-worksheet',
  templateUrl: './journal-worksheet.component.html',
  styleUrls: ['./journal-worksheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalWorksheetComponent implements OnInit, OnDestroy {
  displayedColumns = data.columns;
  dataSource = new Array(25).fill(this.displayedColumns.reduce((acc, curr) => {
    console.log(curr);
    if (curr === 'headline') {
      return { ...acc, [curr]: 'Student' };
    }

    return { ...acc, [curr]: '' };
  }, {}));

  public tableDatesConfig: string[] = tableDatesConfig;

  public datesList: FormArray = null;
  public studentsTable: FormArray[] = [];

  public focusedElement: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly worksheetKeyboardController: WorksheetKeyboardController
  ) { }

  public ngOnInit(): void {
    this.initDates();
    this.initStudents();
    this.initKeysListeners();
  }

  public ngOnDestroy(): void {
    document.onkeydown = null;
  }

  public addStudent(): void {
    this.pushStudent();
  }

  public addDay(): void {
    this.datesList.push(this.formBuilder.control(new Date().toLocaleDateString()));

    this.studentsTable.forEach((studentForm: FormArray) => {
      studentForm.push(this.formBuilder.control(''));
    });
  }

  public cellFocused(target: HTMLInputElement, index: number): void {
    target.parentElement.classList.add('focused');

    this.focusedElement = {
      elemementRef: target,
      index
    };
  }

  public cellBlured(target: HTMLElement): void {
    target.parentElement.classList.remove('focused');

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

  private initDates(): void {
    this.datesList = this.formBuilder.array(
      this.tableDatesConfig.reduce((previous, current) => ([
        ...previous,
        current
      ]), [])
    );
  }

  private initStudents(): void {
    for (let i = 0; i < 10; i++) {
      this.pushStudent();
    }
  }

  private pushStudent(): void {
    this.studentsTable.push(this.formBuilder.array([
      ['Student'],
      ...new Array(this.datesList.length).fill('')
    ]));
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
