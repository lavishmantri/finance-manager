import { useState } from 'react';
import { Button } from '../../oxygen/atoms/button';
import { DatePicker } from '../../oxygen/atoms/date-picker/DatePicker';
import { NumberInput } from '../../oxygen/atoms/input';
import { Select, SelectOption } from '../../oxygen/atoms/select';
import { Modal, ModalContent, ModalOpenButton } from '../../oxygen/molecules/modal';
import { LoanAccount, LoanBasis } from '../../services/generated/graphql-types';
import { FormControl, FormControlType } from '../form-control';
import styles from './add-loan.module.scss';

interface AddLoanFormProps {
  loanAccounts: LoanAccount[];
  loading?: boolean;
  error?: string;

  saveLoan: (
    interestRate: number,
    principal: number,
    loanAccount: string,
    loanBasis: LoanBasis,
    date: string,
    duration?: string,
    notes?: string,
    guarantor?: string,
  ) => void;
}

const loanBasisOptions = Object.keys(LoanBasis).map(basis => ({
  label: basis,
  value: basis,
}));

export const AddLoanForm = ({ loanAccounts, loading, error, saveLoan }: AddLoanFormProps) => {
  const [interest, setInterest] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [loanAccount, setLoanAccount] = useState<SelectOption>();
  const [lBasis, setLBasis] = useState<SelectOption>(loanBasisOptions[0]);
  const [date, setDate] = useState<Date>(new Date());

  const handleLoanAccountSelection = (val: SelectOption) => {
    setLoanAccount(val);
  };

  return (
    <Modal>
      {({ closeModal = () => undefined, isOpen, onBtnClick }) => {
        const handleSaveLoan = async () => {
          if (!loanAccount?.value) {
            return;
          }
          saveLoan(
            interest,
            principal,
            loanAccount?.value,
            lBasis.value as LoanBasis,
            date.toDateString(),
          );
          closeModal();
        };
        return (
          <>
            <ModalOpenButton onBtnClick={onBtnClick}>Add Loan</ModalOpenButton>
            <ModalContent title="Add loan" onClose={closeModal} isOpen={isOpen}>
              <div>
                <FormControl label="Select loan account" type={FormControlType.SingleSelect}>
                  <Select
                    options={loanAccounts.map(loanAccount => ({
                      label: loanAccount.name,
                      value: loanAccount.id,
                    }))}
                    onChange={handleLoanAccountSelection}
                    value={loanAccount}
                  />
                </FormControl>
                <FormControl label="Select interest rate" type={FormControlType.NumberInput}>
                  <NumberInput onChange={setInterest} value={interest} />
                </FormControl>
                <FormControl label="Select principal" type={FormControlType.NumberInput}>
                  <NumberInput onChange={setPrincipal} value={principal} />
                </FormControl>
                <FormControl label="Loan start date" type={FormControlType.DatePicker}>
                  <DatePicker date={date} onChange={setDate} />
                </FormControl>
                <FormControl label="Select loan basis" type={FormControlType.SingleSelect}>
                  <Select options={loanBasisOptions} onChange={setLBasis} value={lBasis} />
                </FormControl>
              </div>
              <div className={styles.footer}>
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={handleSaveLoan} className={styles.primaryButton}>
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </ModalContent>
          </>
        );
      }}
    </Modal>
  );
};
