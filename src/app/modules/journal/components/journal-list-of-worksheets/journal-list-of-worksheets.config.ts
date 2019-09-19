import { JournalListOfWorksheetsComponent } from './journal-list-of-worksheets.component';

import { IYesNoData } from '@models/dialog';

export const MAX_WORKSHEETS_COUNT = 9;

export const onRemoveDialogData = (context?: JournalListOfWorksheetsComponent): IYesNoData => {
  return {
    htmlMessage: `
      <div>Вы уверены, что хотите удалить папку "${context.folder.name}"?</div>
      <div>Восстановление данных будет невозможно.</div>
    `,
    onYes: () => context.removeFolder()
  };
};
