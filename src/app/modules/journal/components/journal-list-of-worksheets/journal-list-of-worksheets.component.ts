import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { IWorksheet } from '@models/worksheet.models';
import { MAX_WORKSHEETS_COUNT, worksheets } from './journal-list-of-worksheets.config';

@Component({
  selector: 'app-journal-list-of-worksheets',
  templateUrl: './journal-list-of-worksheets.component.html',
  styleUrls: ['./journal-list-of-worksheets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalListOfWorksheetsComponent {
  public readonly worksheets: IWorksheet[] = worksheets;

  constructor(private readonly router: Router) { }

  public get worksheetCanBeAdded(): boolean {
    return this.worksheets.length < MAX_WORKSHEETS_COUNT;
  }

  public renameCurrentFolder(): void {
    console.log('renameCurrentFolder');
  }

  public removeCurrentFolder(): void {
    console.log('removeCurrentFolder');
  }

  public returnBack(): void {
    this.router.navigate(['/journal']);
  }
}
