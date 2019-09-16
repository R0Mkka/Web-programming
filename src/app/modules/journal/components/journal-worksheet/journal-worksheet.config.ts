export interface IColumn {
  cells: string[];
  headerCell?: string;
  firstCell?: string;
}

export const tableData: IColumn[] = [
  { headerCell: '', cells: [] }
];
