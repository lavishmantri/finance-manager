import { LoanAccount } from '../../services/generated/graphql-types';
import { Datasheet } from '../datasheet';

interface LoansListProps {
  loanAccounts: LoanAccount[];
}

export const LoansList = ({ loanAccounts }: LoansListProps) => {
  const handleSaveAccount = () => {};
  const handleClose = () => {};

  return (
    <Datasheet
      grid={loanAccounts.map(loanAccount => [
        { columnId: 'ID', value: loanAccount.id },
        { columnId: 'NAME', value: loanAccount.name },
      ])}
    />
  );
};
