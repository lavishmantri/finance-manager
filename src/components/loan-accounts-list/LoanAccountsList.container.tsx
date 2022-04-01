import { LoanAccount, useGetLoanAccountsQuery } from '../../services/generated/graphql-types';
import { LoanAccountsList } from './LoanAccountsList';

export const LoanAccountsListContainer = () => {
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

  return <LoanAccountsList loanAccounts={data.getLoanAccounts as LoanAccount[]} />;
};
