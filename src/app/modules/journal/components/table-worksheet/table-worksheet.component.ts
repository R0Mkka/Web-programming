import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

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

  constructor(
    private readonly formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initDates();
    this.initStudents();
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
    this.studentsTable = new Array(20).fill(this.formBuilder.array([
      ['Student'],
      ['Kek']
    ]));
  }
}
