import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import { Loan, LoanComputedDetails } from '../../services/generated/graphql-types';
import styles from './loanDetails.module.scss';

interface LoanDetailsProps {
  loan: Loan;
  loanComputedDetails: LoanComputedDetails;
}

export const LoanDetails = ({ loan, loanComputedDetails }: LoanDetailsProps) => {
  return (
    <div>
      <div className={styles.section}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Principal</Typography>
        <Typography variant={TypographyVariants.BODY1}>{loan.principal}</Typography>
      </div>
      <div>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Interest rate</Typography>
        <Typography variant={TypographyVariants.BODY1}>{loan.interestRate}</Typography>
      </div>
      <div>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Interest Earned</Typography>
        <Typography variant={TypographyVariants.BODY1}>
          {loanComputedDetails.totalInterestEarned}
        </Typography>
      </div>
    </div>
  );
};
