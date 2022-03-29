import { FormControl } from '../form-control';

interface AddTransactionProps {
  onCancel?: () => void;
  onSave?: () => void;
}

export const AddTransaction = ({}: AddTransactionProps) => {
  const handleInputChange = (value: string) => {};

  return (
    <>
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
    </>
  );
};
