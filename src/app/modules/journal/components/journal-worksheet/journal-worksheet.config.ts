export interface IColumn {
  cells: string[];
  headerCell?: string;
  firstCell?: string;
}

export const emptyTableData: IColumn[] = [
  { headerCell: '', cells: [] }
];
