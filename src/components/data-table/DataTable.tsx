import { DataGridPro, GridColumns, GridRowsProp } from '@mui/x-data-grid-pro';

interface DataTableProps {
  columns: GridColumns;
  rows: GridRowsProp;
}

export const DataTable = ({ columns, rows }: DataTableProps) => (
  <DataGridPro columns={columns} rows={rows} />
);
