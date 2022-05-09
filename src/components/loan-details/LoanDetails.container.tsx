import { useParams } from 'react-router-dom';
import { useLoanDetailsQuery } from '../../services/generated/graphql-types';
import { LoanDetails } from './LoanDetails';

export const LoanDetailsContainer = () => {
  const { id } = useParams();
  const { data, loading, error } = useLoanDetailsQuery({
    variables: {
      loanId: id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data?.getLoanDetails) {
    return <div>Loan details not found</div>;
  }

  const loanDetails = data.getLoanDetails;

  return (
    <LoanDetails loan={loanDetails.loan} loanComputedDetails={loanDetails.loanComputedDetails} />
  );
};
