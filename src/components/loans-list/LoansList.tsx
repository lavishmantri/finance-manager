import { Loan } from '../../services/generated/graphql-types';
import { DataTable } from '../data-table/DataTable';

interface LoansListProps {
  loans: Loan[];
}

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Date',
    accessor: 'date',
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
];

export const LoansList = ({ loans }: LoansListProps) => {
  return <DataTable columns={columns} data={loans} />;
};
