import { State, Action, StateContext } from '@ngxs/store';
import * as WorksheetActions from '../actions/worksheets.actions';

import { IWorksheet } from '@models/worksheet.models';

type ContextType = StateContext<IWorksheet[]>;

@State<IWorksheet[]>({
  name: 'worksheets',
  defaults: []
})
export class WorksheetsState {
  @Action(WorksheetActions.AddWorksheetAction)
  public addWorksheet(ctx: ContextType, action: { worksheet: IWorksheet }): void {
    ctx.setState([
      ...ctx.getState(),
      action.worksheet
    ]);
  }

  @Action(WorksheetActions.RemoveWorksheetAction)
  public removeWorksheet(ctx: ContextType, action: { worksheetId: string }): void {
    ctx.setState([
      ...ctx.getState().filter((worksheet: IWorksheet) => worksheet.id !== action.worksheetId)
    ]);
  }

  @Action(WorksheetActions.EditWorksheetAction)
  public editWorksheet(ctx: ContextType, action: { worksheet: IWorksheet }): void {
    ctx.setState([
      ...ctx.getState().map((worksheet: IWorksheet) => {
        if (worksheet.id === action.worksheet.id) {
          return action.worksheet;
        }

        return worksheet;
      })
    ]);
  }
}
