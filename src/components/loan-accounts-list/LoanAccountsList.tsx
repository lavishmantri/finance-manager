import { CellProps } from 'react-table';
import { LoanAccount } from '../../services/generated/graphql-types';
import { ColumnCellDefinedProps, DataTable } from '../data-table/DataTable';

interface LoansListProps {
  loanAccounts: LoanAccount[];
  handleDelete: (id: string) => void;
}

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    accessor: 'delete',
    Cell: (props: ColumnCellDefinedProps & CellProps<Record<string, unknown>>) => {
      const handleCellClick = () => {
        props.onClick && props.onClick(props.row.id);
      };
      return <div onClick={handleCellClick}>delete</div>;
    },
  },
];

export const LoanAccountsList = ({ loanAccounts, handleDelete }: LoansListProps) => {
  const onDelete = (value: unknown, columnId?: string) => {
    handleDelete(value as string);
  };
  return (
    <DataTable
      columns={columns}
      data={loanAccounts}
      columnCellProps={[{ columnId: 'delete', props: { onClick: onDelete } }]}
    />
  );
};
