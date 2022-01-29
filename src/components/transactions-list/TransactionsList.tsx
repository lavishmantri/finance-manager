import { useGetTransactionsQuery } from '../../queries';
import { Table } from '../table';

export const TransactionsList = () => {
  const { isLoading, data } = useGetTransactionsQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Table />
    </div>
  );
};
