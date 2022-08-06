import { Column, useTable } from 'react-table';
import styles from './datatable.module.scss';

export interface ColumnCellDefinedProps {
  onClick?: (value: unknown, columnId?: string) => void;
}
interface ColumnCellProps {
  columnId: string;
  props: ColumnCellDefinedProps;
}
interface DataTableProps {
  columns: Column<Record<string, unknown>>[];
  data: Record<string, unknown>[];
  columnCellProps?: ColumnCellProps[];
}

export const DataTable = ({ columns, data, columnCellProps = [] }: DataTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<
    Record<string, unknown>
  >({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className={styles.headerCell}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                const columnCellPropsToApply = columnCellProps.find(
                  cCellProp => cCellProp.columnId === cell.column.id,
                );

                return (
                  <td {...cell.getCellProps()} className={styles.cell}>
                    {cell.render('Cell', {
                      onClick: columnCellPropsToApply?.props?.onClick,
                    })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
