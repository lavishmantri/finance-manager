import { useGetTransactionsQuery } from '../../queries';
import { DataTable } from '../data-table';
import styles from './transactionlist.module.scss';

const columns = [
  {
    field: 'accountId',
    headerName: 'Name',
  },
  {
    field: 'amount',
    headerName: 'Amount',
  },
];

export const TransactionsList = () => {
  const { isLoading, isError, data } = useGetTransactionsQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Empty transactions</div>;
  }

  return (
    <div className={styles.transactionContainer}>
      <div>Transactions</div>
      <DataTable columns={columns} rows={data} />
    </div>
  );
};
