import { useDeleteLoanMutation, useGetLoansQuery } from '../../services/generated/graphql-types';
import { LoansList } from './LoansList';

export const LoansListContainer = () => {
  const { data, loading, error } = useGetLoansQuery();
  const [deleteLoan, { loading: deletingLoan, error: deleteLoanError }] = useDeleteLoanMutation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error.... - {error.message}</div>;
  }

  if (!data?.getLoansList || data?.getLoansList.loans?.length === 0) {
    return <div>No data</div>;
  }

  const handleLoanDelete = (loanId: string) => {
    deleteLoan({
      variables: {
        loanId,
      },
    });
  };
  return <LoansList loans={data.getLoansList.loans || []} deleteLoan={handleLoanDelete} />;
};
