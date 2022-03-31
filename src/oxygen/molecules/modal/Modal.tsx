import React, { useState } from 'react';

interface ModalProps {
  children: (opts: ModalOptions) => React.ReactElement;
}

interface ModalOptions {
  closeModal: () => void;
  isOpen: boolean;
  onBtnClick: () => void;
}

export const Modal = ({ children }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnModalBtnClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <>{children({ closeModal, isOpen: isModalOpen, onBtnClick: handleOnModalBtnClick })}</>;
};
