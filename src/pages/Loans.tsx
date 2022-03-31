import { AddLoanAccountContainer } from '../components/add-loan-account';
import { LoansListContainer } from '../components/loans-list/LoansList.container';
import { Typography, TypographyVariants } from '../oxygen/molecules/typography';
import styles from './page.module.scss';

export const Loans = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Loans</Typography>
        <AddLoanAccountContainer />
      </div>
      <LoansListContainer />
    </div>
  );
};
