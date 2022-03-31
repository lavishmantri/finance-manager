import { LoanAccount, useGetLoanAccountsQuery } from '../../services/generated/graphql-types';
import { LoansList } from './LoansList';

export const LoansListContainer = () => {
  const { data, loading, error } = useGetLoanAccountsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data?.getLoanAccounts) {
    return <div>No loan accounts found</div>;
  }

  return <LoansList loanAccounts={data.getLoanAccounts as LoanAccount[]} />;
};
