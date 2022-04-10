import {
  LoanAccount,
  LoanBasis,
  useCreateLoanMutation,
  useGetLoanAccountsQuery,
} from '../../services/generated/graphql-types';
import { AddLoanForm } from './AddLoanForm';

export const AddLoanFormContainer = () => {
  const { data, loading, error } = useGetLoanAccountsQuery();
  const [saveLoan, { data: loan, loading: createLoanLoading }] = useCreateLoanMutation();

  if (loading) {
    return <>Loading...</>;
  }

  if ((data?.getLoanAccounts?.length || 0) < 1) {
    return <>No Loan accounts found. Add a loan account first</>;
  }

  const handleSaveLoan = (
    interestRate: number,
    principal: number,
    loanAccount: string,
    loanBasis: LoanBasis,
    date: string,
    duration?: string,
    notes?: string,
    guarantor?: string,
  ) => {
    saveLoan({
      variables: {
        interestRate,
        principal,
        loanAccount,
        loanBasis,
        duration,
        date,
        notes,
        guarantor,
      },
    });
  };

  return (
    <AddLoanForm
      loading={createLoanLoading}
      error={error?.message}
      loanAccounts={data?.getLoanAccounts as LoanAccount[]}
      saveLoan={handleSaveLoan}
    />
  );
};
