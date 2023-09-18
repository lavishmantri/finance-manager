import dayjs from 'dayjs';
import { CellProps } from 'react-table';
import {
  LoanTransaction,
  useGetLoanLoanTransactionsQuery,
} from '../../services/generated/graphql-types';
import { ColumnCellDefinedProps, DataTable } from '../data-table/DataTable';

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Type',
    accessor: 'type',
    Cell: (props: ColumnCellDefinedProps & CellProps<Record<string, unknown>, unknown>) => {
      return <div>{props.value as string}</div>;
    },
  },
  {
    Header: 'Notes',
    accessor: 'notes',
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: (props: ColumnCellDefinedProps & CellProps<Record<string, unknown>, unknown>) => {
      const formattedDate = dayjs(props.value as string).format('DD/MM/YYYY');
      return <div>{formattedDate}</div>;
    },
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

interface LoanTransactionListProps {
  loanId: string;
}

export const LoanTransactionListContainer = ({ loanId }: LoanTransactionListProps) => {
  const { data, loading, error } = useGetLoanLoanTransactionsQuery({
    variables: {
      loanId,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data?.getLoanTransactions) {
    return <div>Loan details not found</div>;
  }

  return <DataTable columns={columns} data={data.getLoanTransactions as LoanTransaction[]} />;
};
