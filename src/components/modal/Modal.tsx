import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../button';
import styles from './modal.module.scss';

enum ModalVariant {
  MEDIUM = 'MEDIUM',
  FULLSCREEN = 'FULLSCREEN',
}

interface ModalProps {
  isOpen: boolean;
  className?: string;
  variant?: ModalVariant;
  handlePrimaryAction?: () => void;
  onClose?: () => void;
  title: string;
  primaryText?: string;
  secondaryText?: string;
}

export const Modal = ({
  isOpen,
  title,
  className = '',
  variant = ModalVariant.MEDIUM,
  handlePrimaryAction = () => {},
  onClose = () => {},
  primaryText,
  secondaryText,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <ReactModal isOpen={isOpen} className={styles.content}>
      <div className={styles.header}>{title}</div>
      {children}
      <div className={styles.footer}>
        <Button onClick={onClose}>{primaryText}</Button>
        <Button onClick={handlePrimaryAction}>{secondaryText}</Button>
      </div>
    </ReactModal>
  );
};
