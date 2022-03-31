import { useState } from 'react';
import { Button } from '../../oxygen/atoms/button';
import { Modal, ModalContent, ModalOpenButton } from '../../oxygen/molecules/modal';
import { FormControl } from '../form-control';
import styles from './add-loan-account.module.scss';

interface AddLoanAccountFormProps {
  loading?: boolean;
  error?: string;
  saveAccount: (name: string, description?: string) => void;
}

export const AddLoanAccountForm = ({ loading, error, saveAccount }: AddLoanAccountFormProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (val: string) => {
    setName(val);
  };

  const handleDescriptionChange = (val: string) => {
    setDescription(val);
  };

  return (
    <Modal>
      {({ closeModal = () => undefined, isOpen, onBtnClick }) => {
        const handleSaveAccount = async () => {
          await saveAccount(name, description);
          closeModal();
        };
        return (
          <>
            <ModalOpenButton onBtnClick={onBtnClick}>Add Loan account</ModalOpenButton>
            <ModalContent title="Add loan account" onClose={closeModal} isOpen={isOpen}>
              <div>
                <FormControl label="Name" value={name} onChange={handleNameChange} type="input" />
                <FormControl
                  label="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  type="input"
                />
              </div>
              <div className={styles.footer}>
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={handleSaveAccount} className={styles.primaryButton}>
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
