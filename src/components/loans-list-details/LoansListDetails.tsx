import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import { LoanListAggregationDetails } from '../../services/generated/graphql-types';
import styles from './loansListDetails.module.scss';

interface LoansListDetailsProps {
  loanListDetails: LoanListAggregationDetails;
}

export const LoansListDetails = ({ loanListDetails }: LoansListDetailsProps) => {
  return (
    <div className="">
      <div className={styles.row}>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Total Pricipal lent</Typography>
          <Typography variant={TypographyVariants.BODY1}>
            {loanListDetails.totalPrincipalInvested}
          </Typography>
        </div>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Absolute returns</Typography>
          <Typography variant={TypographyVariants.BODY1}>
            {loanListDetails.absoluteReturns}
          </Typography>
        </div>
        <div className={styles.section}>
          <Typography variant={TypographyVariants.SUB_HEADING1}>
            Weighted average rate of Interest
          </Typography>
          <Typography variant={TypographyVariants.BODY1}>
            {loanListDetails.averageInterestRate}
          </Typography>
        </div>
      </div>
    </div>
  );
};
