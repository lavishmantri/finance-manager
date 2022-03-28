import { FormControl } from '../form-control';
import { Modal } from '../modal';

interface AddTransactionProps {
  onCancel?: () => void;
  onSave?: () => void;
}

export const AddTransaction = ({}: AddTransactionProps) => {
  const handleInputChange = (value: string) => {};

  return (
    <Modal isOpen title="Add transaction">
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
    </Modal>
  );
};
