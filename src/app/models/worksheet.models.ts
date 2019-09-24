import { IColumn } from './table.models';

export interface IWorksheet {
  folderId?: string;
  title: string;
  id: string;
  content: IColumn[];
}
