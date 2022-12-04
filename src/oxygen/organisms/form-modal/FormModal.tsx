import { PropsWithChildren } from 'react';
import { Box } from '../../atoms/box';
import { Button } from '../../atoms/button';
import { Modal, ModalContent, ModalOpenButton } from '../../molecules/modal';
import styles from './formModal.module.scss';

interface FormModalProps {
  title: string;
  btnText: string;
  loading?: boolean;
  onFormSubmit: () => Promise<void>;
}

export const FormModal = ({
  title,
  btnText,
  children,
  loading,
  onFormSubmit,
}: PropsWithChildren<FormModalProps>) => {
  return (
    <Modal>
      {({ closeModal = () => undefined, isOpen, onBtnClick }) => {
        const handleSaveLoan = async () => {
          await onFormSubmit();
          closeModal();
        };
        return (
          <>
            <ModalOpenButton onBtnClick={onBtnClick}>{btnText}</ModalOpenButton>
            <ModalContent title={title} onClose={closeModal} isOpen={isOpen}>
              <Box>{children}</Box>
              <Box className={styles.footer}>
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={handleSaveLoan} className={styles.primaryButton}>
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </Box>
            </ModalContent>
          </>
        );
      }}
    </Modal>
  );
};
