import { Component, ChangeDetectionStrategy } from '@angular/core';

import { worksheetList } from './journal-table.config';

@Component({
  selector: 'app-journal-table',
  templateUrl: './journal-table.component.html',
  styleUrls: ['./journal-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalTableComponent {
  public worksheetList: any[] = worksheetList;
}
