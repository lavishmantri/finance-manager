import { useGetLoansQuery } from '../../services/generated/graphql-types';
import { LoansList } from './LoansList';

export const LoansListContainer = () => {
  const { data, loading, error } = useGetLoansQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error.... - {error.message}</div>;
  }

  if (!data?.getLoansList || data?.getLoansList.loans?.length === 0) {
    return <div>No data</div>;
  }
  return <LoansList loans={data.getLoansList.loans || []} />;
};
