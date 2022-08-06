import { LoanDetailsContainer } from '../components/loan-details/LoanDetails.container';
import { Typography, TypographyVariants } from '../oxygen/molecules/typography';
import styles from './page.module.scss';

export const LoanDetailsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Add Loan Transaction</Typography>
      </div>
      <LoanDetailsContainer />
    </div>
  );
};
