import { useAddLoanAccountMutation } from '../../services/generated/graphql-types';
import { AddLoanAccountForm } from './AddLoanAccountForm';

export const AddLoanAccountContainer = () => {
  const [addLoanAccountMutation, { data, loading, error }] = useAddLoanAccountMutation();

  const saveAccount = (name: string, description?: string) =>
    addLoanAccountMutation({
      variables: {
        name,
        description,
      },
    });

  return <AddLoanAccountForm loading={loading} error={error?.message} saveAccount={saveAccount} />;
};
