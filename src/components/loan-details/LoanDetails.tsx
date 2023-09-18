import dayjs from 'dayjs';
import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import { Loan, LoanComputedDetails } from '../../services/generated/graphql-types';
import { AddLoanTransactionContainer } from '../add-loan-transaction/AddLoanTransaction.container';
import { LoanTransactionListContainer } from '../loan-transaction-list/LoanTransactionList.container';
import styles from './loanDetails.module.scss';

interface LoanDetailsProps {
  loan: Loan;
  loanComputedDetails: LoanComputedDetails;
}

export const LoanDetails = ({ loan, loanComputedDetails }: LoanDetailsProps) => {
  const formattedDate = dayjs(loan.date).format('DD/MM/YYYY');

  return (
    <div>
      <div className={styles.pageHeader}>
        <AddLoanTransactionContainer loanId={loan.id} />
      </div>
      <div className={styles.pageContent}>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Start date</Typography>
          <Typography variant={TypographyVariants.BODY1}>{formattedDate}</Typography>
        </div>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Principal</Typography>
          <Typography variant={TypographyVariants.BODY1}>
            {loan.principal.toLocaleString('en-IN', {
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'INR',
            })}
          </Typography>
        </div>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Interest rate</Typography>
          <Typography variant={TypographyVariants.BODY1}>
            {loan.interestRate.toPrecision(2)}%
          </Typography>
        </div>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Interest Earned</Typography>
          <Typography variant={TypographyVariants.BODY1}>
            {loanComputedDetails.totalInterestEarned.toLocaleString('en-IN', {
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'INR',
            })}
          </Typography>
        </div>
      </div>
      <div>
        <LoanTransactionListContainer loanId={loan.id} />
      </div>
    </div>
  );
};
