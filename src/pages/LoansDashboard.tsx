import { AddLoanFormContainer } from '../components/add-loan';
import { LoansListDetailsContainer } from '../components/loans-list-details/LoansListDetails.container';
import { LoansListContainer } from '../components/loans-list/LoansList.container';
import { Typography, TypographyVariants } from '../oxygen/molecules/typography';
import styles from './page.module.scss';

export const LoansDashboard = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Loans</Typography>
        <AddLoanFormContainer />
      </div>
      <LoansListDetailsContainer />
      <LoansListContainer />
    </div>
  );
};
