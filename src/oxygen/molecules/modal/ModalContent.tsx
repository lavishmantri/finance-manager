import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../../atoms/button';
import styles from './modal.module.scss';

enum ModalVariant {
  MEDIUM = 'MEDIUM',
  FULLSCREEN = 'FULLSCREEN',
}

interface ModalContentProps {
  isOpen?: boolean;
  className?: string;
  variant?: ModalVariant;
  handlePrimaryAction?: () => void;
  onClose?: () => void;
  title: string;
  primaryText?: string;
  secondaryText?: string;
}

export const ModalContent = ({
  isOpen = false,
  title,
  className = '',
  variant = ModalVariant.MEDIUM,
  handlePrimaryAction = () => {},
  onClose = () => {},
  primaryText,
  secondaryText,
  children,
}: PropsWithChildren<ModalContentProps>) => {
  return (
    <ReactModal isOpen={isOpen} className={styles.content}>
      <div className={styles.header}>{title}</div>
      {children}
      <div className={styles.footer}>
        <Button onClick={onClose}>{secondaryText}</Button>
        <Button onClick={handlePrimaryAction} className={styles.primaryButton}>
          {primaryText}
        </Button>
      </div>
    </ReactModal>
  );
};
