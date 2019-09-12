import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { TableWorksheetController } from './table-worksheet.controller';

import { tableDatesConfig, data } from './table-worksheet.config';

@Component({
  selector: 'app-table-worksheet',
  templateUrl: './table-worksheet.component.html',
  styleUrls: ['./table-worksheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableWorksheetComponent implements OnInit, OnDestroy {
  displayedColumns = data.columns;
  dataSource = data.data;

  public tableDatesConfig: string[] = tableDatesConfig;

  public datesList: FormArray = null;
  public studentsTable: FormArray[] = [];

  public focusedElement: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly tableWorksheetController: TableWorksheetController
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
          this.tableWorksheetController.moveDown(target, this.focusedElement.index);
          break;
        case 'ArrowUp':
          this.tableWorksheetController.moveUp(target, this.focusedElement.index);
          break;
        case 'ArrowRight':
          this.tableWorksheetController.moveRight(target);
          break;
        case 'ArrowLeft':
          this.tableWorksheetController.moveLeft(target);
          break;
        default:
          break;
      }
    };
  }
}
