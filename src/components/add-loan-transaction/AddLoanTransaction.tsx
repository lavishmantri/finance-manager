import { Textarea } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { DatePicker } from '../../oxygen/atoms/date-picker/DatePicker';
import { NumberInput } from '../../oxygen/atoms/input';
import { Select, SelectOption } from '../../oxygen/atoms/select';
import { FormModal } from '../../oxygen/organisms/form-modal/FormModal';
import { LoanTransactionType } from '../../services/generated/graphql-types';
import { FormControl, FormControlType } from '../form-control';

interface AddLoanTransactionProps {
  loading?: boolean;
  submitLoanTransactionForm: (
    amount: number,
    date: string,
    type: LoanTransactionType,
    notes: string,
  ) => void;
}

export const AddLoanTransaction = ({
  loading,
  submitLoanTransactionForm,
}: AddLoanTransactionProps) => {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [transactionType, setTransactionType] = useState({
    label: LoanTransactionType.INTEREST_PAYMENT,
    value: LoanTransactionType.INTEREST_PAYMENT,
  });
  const [notes, setNotes] = useState('');

  const handleAmountChange = (val: number) => {
    setAmount(val);
  };

  const handleDateChange = (date: Date) => {};

  const handleTransactionTypeSelect = (opt: SelectOption) => {};

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleFormSubmit = async () => {
    await submitLoanTransactionForm(amount, date.toISOString(), transactionType.value, notes);
  };

  return (
    <FormModal title="Add Transaction" btnText="Add Transaction" onFormSubmit={handleFormSubmit}>
      <FormControl type={FormControlType.NumberInput} label="Amount">
        <NumberInput value={amount} onChange={handleAmountChange} />
      </FormControl>
      <FormControl type={FormControlType.DatePicker} label="Transaction date">
        <DatePicker date={date} onChange={handleDateChange} />
      </FormControl>
      <FormControl type={FormControlType.SingleSelect} label="Transaction Type">
        <Select
          value={transactionType}
          onChange={handleTransactionTypeSelect}
          options={Object.keys(LoanTransactionType).map(transactionType => ({
            label: transactionType,
            value: transactionType,
          }))}
        ></Select>
      </FormControl>
      <FormControl type={FormControlType.TextInput} label="Notes">
        <Textarea onChange={handleNotesChange} value={notes} />
      </FormControl>
    </FormModal>
  );
};
