import { AddLoanAccountContainer } from '../components/add-loan-account';
import { LoanAccountsListContainer } from '../components/loan-accounts-list/LoanAccountsList.container';
import { Typography, TypographyVariants } from '../oxygen/molecules/typography';
import styles from './page.module.scss';

export const LoanAccounts = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Loan Accounts</Typography>
        <AddLoanAccountContainer />
      </div>
      <LoanAccountsListContainer />
    </div>
  );
};
