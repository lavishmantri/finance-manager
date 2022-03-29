import { Modal, ModalContent, ModalOpenButton } from '../../oxygen/molecules/modal';
import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import { AddLoanAccount } from '../add-loan-account';
import styles from './loanslist.module.scss';

export const LoansList = () => {
  return (
    <div>
      <div className={styles.loansHeader}>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Loans</Typography>
        <Modal>
          <ModalOpenButton>Add Loan account</ModalOpenButton>
          <ModalContent title="Add loan account" primaryText="Save" secondaryText="Cancel">
            <AddLoanAccount />
          </ModalContent>
        </Modal>
      </div>
      <div>Content</div>
    </div>
  );
};
