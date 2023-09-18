import { Link } from 'react-router-dom';
import { CellProps } from 'react-table';
import { getLoanDetailPath } from '../../routes/constants';
import { Loan } from '../../services/generated/graphql-types';
import { formatDate } from '../../utils/date-formatter';
import { ColumnCellDefinedProps, DataTable } from '../data-table/DataTable';
import styles from './loansList.module.scss';

interface LoansListProps {
  loans: Loan[];
  closeLoan: (loanId: string) => void;
  deleteLoan: (loanId: string) => void;
}

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    Cell: ({ value }: CellProps<Record<string, unknown>>) => {
      return <Link to={getLoanDetailPath(value)}>{value}</Link>;
    },
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }: CellProps<Record<string, unknown>>) => {
      return <>{formatDate(value).toDateString()}</>;
    },
  },
  {
    Header: 'Loan Account',
    accessor: 'loanAccount.name',
  },
  {
    Header: 'Principal',
    accessor: 'principal',
  },
  {
    Header: 'Interest',
    accessor: 'interestRate',
  },
  {
    Header: 'duration',
    accessor: 'Duration',
  },
  {
    Header: 'guarantor',
    accessor: 'Guarantor',
  },
  {
    Header: 'Notes',
    accessor: 'notes',
  },
  {
    Header: 'Basis',
    accessor: 'basis',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Close',
    accessor: 'close',
    Cell: (props: ColumnCellDefinedProps & CellProps<Record<string, unknown>>) => {
      const handleCellClick = () => {
        props.onClick && props.onClick(props.row.id);
      };
      return (
        <div className={styles.delete} onClick={handleCellClick}>
          close
        </div>
      );
    },
  },
  {
    Header: 'Delete',
    accessor: 'delete',
    Cell: (props: ColumnCellDefinedProps & CellProps<Record<string, unknown>>) => {
      const handleCellClick = () => {
        props.onClick && props.onClick(props.row.id);
      };
      return (
        <div className={styles.delete} onClick={handleCellClick}>
          delete
        </div>
      );
    },
  },
];

export const LoansList = ({ loans, closeLoan, deleteLoan }: LoansListProps) => {
  const handleClose = (idx: unknown) => {
    console.log('close: ', idx, loans[idx as number].id);
    closeLoan(loans[idx as number].id);
  };
  const handleDelete = (idx: unknown) => {
    deleteLoan(loans[idx as number].id);
  };
  return (
    <DataTable
      columns={columns}
      data={loans}
      columnCellProps={[
        { columnId: 'close', props: { onClick: handleClose } },
        { columnId: 'delete', props: { onClick: handleDelete } },
      ]}
    />
  );
};
