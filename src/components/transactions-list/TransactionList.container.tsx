import { TransactionsList } from '.';
import { useGetTransactionsQuery } from '../../queries';

export const TransactionsListContainer = () => {
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

  return <TransactionsList transactions={data} />;
};
