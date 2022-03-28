import { Button } from '../../oxygen/atoms/button';
import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import styles from './loanslist.module.scss';

export const LoansList = () => {
  const handleAddLoanAccount = () => {};

  return (
    <div>
      <div className={styles.loansHeader}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Loans</Typography>
        <Button onClick={handleAddLoanAccount}>Add Loan account</Button>
      </div>
      <div>Content</div>
    </div>
  );
};
