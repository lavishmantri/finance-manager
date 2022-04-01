import { LoanAccount } from '../../services/generated/graphql-types';
import { DataTable } from '../data-table/DataTable';

interface LoansListProps {
  loanAccounts: LoanAccount[];
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
];

export const LoanAccountsList = ({ loanAccounts }: LoansListProps) => {
  return <DataTable columns={columns} data={loanAccounts} />;
};
