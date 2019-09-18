import { IColumn } from './table.models';

export interface IWorksheet {
  title: string;
  id: string;
  content: IColumn[];
}
