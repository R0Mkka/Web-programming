import { JournalWorksheetComponent } from './journal-worksheet.component';

import { IColumn } from '@models/table.models';
import { IYesNoData } from '@models/dialog';

export const emptyWorksheeteData: IColumn[] = [
  { headerCell: '', cells: ['', ''] },
  { headerCell: '(пусто)', cells: ['', ''] },
  { headerCell: '(пусто)', cells: ['', ''] }
];

export const removeWorksheetDialogData = (context: JournalWorksheetComponent): IYesNoData => ({
  htmlMessage: `
    <div>Вы уверены, что хотите удалить лист "${context.currentWorksheet.title}"?</div>
    <div>Восстановление данных будет невозможно.</div>
  `,
  onYes: () => context.removeWorksheet()
});
