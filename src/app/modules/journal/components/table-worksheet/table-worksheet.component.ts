import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

import { tableDatesConfig } from './table-worksheet.config';

@Component({
  selector: 'app-table-worksheet',
  templateUrl: './table-worksheet.component.html',
  styleUrls: ['./table-worksheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableWorksheetComponent implements OnInit {
  public tableDatesConfig: string[] = tableDatesConfig;

  public datesList: FormArray = null;
  public studentsTable: FormArray[] = [];

  public focusedElement: any;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initDates();
    this.initStudents();
    this.initKeysListeners();
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
    document.onkeydown = (event: KeyboardEvent) => {
      const target: HTMLElement = event.target as HTMLElement;

      if (!this.focusedElement) {
        return;
      }

      if (event.key === 'ArrowUp') {
        const index = this.focusedElement.index;

        if (target.parentElement.parentElement.previousElementSibling &&
          target.parentElement.parentElement.previousElementSibling.classList.contains('worksheet-item')) {
          this.cellBlured(target);

          target.parentElement.parentElement.previousElementSibling.children[index].querySelector('input').focus();
        }
      }

      if (event.key === 'ArrowDown' || event.key === 'Enter') {
        const index = this.focusedElement.index;

        if (target.parentElement.parentElement.nextElementSibling &&
          target.parentElement.parentElement.nextElementSibling.classList.contains('worksheet-item')) {
          this.cellBlured(target);

          target.parentElement.parentElement.nextElementSibling.children[index].querySelector('input').focus();
        }
      }

      if (event.key === 'ArrowRight') {
        if (target.parentElement.nextElementSibling) {
          this.cellBlured(target);

          target.parentElement.nextElementSibling.querySelector('input').focus();
        }
      }

      if (event.key === 'ArrowLeft') {
        if (target.parentElement.previousElementSibling) {
          this.cellBlured(target);

          target.parentElement.previousElementSibling.querySelector('input').focus();
        }
      }
    };
  }
}
