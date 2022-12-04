import {
  LoanTransactionType,
  useCreateLoanTransactionMutation,
} from '../../services/generated/graphql-types';
import { AddLoanTransaction } from './AddLoanTransaction';

interface AddLoanTransactionContainerProps {
  loanId: string;
}

export const AddLoanTransactionContainer = ({ loanId }: AddLoanTransactionContainerProps) => {
  const [createLoanTransaction, { data, loading, error }] = useCreateLoanTransactionMutation();

  const handleLoanTransactionCreate = async (
    amount: number,
    date: string,
    type: LoanTransactionType,
    notes: string,
  ) => {
    await createLoanTransaction({
      variables: {
        loanId,
        amount,
        date,
        type,
        notes,
      },
    });
  };

  return (
    <AddLoanTransaction loading={loading} submitLoanTransactionForm={handleLoanTransactionCreate} />
  );
};
