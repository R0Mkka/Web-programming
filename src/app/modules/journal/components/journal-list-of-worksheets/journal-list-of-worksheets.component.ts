import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IWorksheet } from '@models/worksheet.models';
import { worksheets } from './journal-list-of-worksheets.config';

@Component({
  selector: 'app-journal-list-of-worksheets',
  templateUrl: './journal-list-of-worksheets.component.html',
  styleUrls: ['./journal-list-of-worksheets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalListOfWorksheetsComponent {
  public readonly worksheets: IWorksheet[] = worksheets;
}
