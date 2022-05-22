import { useGetLoansListAggregationDetailsQuery } from '../../services/generated/graphql-types';
import { LoansListDetails } from './LoansListDetails';

export const LoansListDetailsContainer = () => {
  const { data, loading, error } = useGetLoansListAggregationDetailsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data?.getLoansListAggregationDetails) {
    return <div>Details not found</div>;
  }

  return <LoansListDetails loanListDetails={data?.getLoansListAggregationDetails} />;
};
