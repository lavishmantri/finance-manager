import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import styles from './modal.module.scss';

enum ModalVariant {
  MEDIUM = 'MEDIUM',
  FULLSCREEN = 'FULLSCREEN',
}

interface ModalContentProps {
  isOpen?: boolean;
  className?: string;
  variant?: ModalVariant;
  onClose?: () => void;
  title?: string;
}

export const ModalContent = ({
  isOpen = false,
  className = '',
  variant = ModalVariant.MEDIUM,
  children,
  onClose,
  title,
}: PropsWithChildren<ModalContentProps>) => {
  return (
    <ReactModal isOpen={isOpen} className={styles.content} onRequestClose={onClose}>
      <div className={styles.header}>{title}</div>
      {children}
    </ReactModal>
  );
};
