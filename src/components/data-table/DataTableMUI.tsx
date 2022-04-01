import { DataGridPro, GridColumns, GridRowsProp } from '@mui/x-data-grid-pro';

interface DataTableProps {
  columns: GridColumns;
  rows: GridRowsProp;
}

export const DataTableMUI = ({ columns, rows }: DataTableProps) => (
  <DataGridPro columns={columns} rows={rows} />
);
