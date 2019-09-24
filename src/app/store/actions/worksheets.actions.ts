import { IWorksheet } from '@models/worksheet.models';

const ACTIONS_TYPE = '[Worksheets]';

export class AddWorksheetAction {
  static readonly type = `${ACTIONS_TYPE} AddWorksheet`;

  constructor(public worksheet: IWorksheet) { }
}

export class RemoveWorksheetAction {
  static readonly type = `${ACTIONS_TYPE} RemoveWorksheet`;

  constructor(public worksheetId: string) { }
}

export class EditWorksheetAction {
  static readonly type = `${ACTIONS_TYPE} EditWorksheet`;

  constructor(public worksheet: IWorksheet) { }
}
