import React, { useState } from 'react';
import { ModalContent } from './ModalContent';
import { ModalOpenButton } from './ModalOpenButton';

interface ModalProps {
  children: React.ReactElement[];
}

export const Modal = ({ children }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let modalOpenBtnChild, modalContent;

  React.Children.forEach(children, (child: React.ReactElement) => {
    if (child.type === ModalOpenButton) {
      modalOpenBtnChild = child;
    }

    if (child.type === ModalContent) {
      modalContent = child;
    }
  });

  const handleOnModalBtnClick = () => {
    setIsModalOpen(true);
  };

  if (!React.isValidElement(modalOpenBtnChild) || !React.isValidElement(modalContent)) {
    throw 'Modal needs to have ModalOpenButton and ModalContent Chidldren';
  }

  return (
    <>
      {React.cloneElement(modalOpenBtnChild, {
        onBtnClick: handleOnModalBtnClick,
      })}
      {React.cloneElement(modalContent, {
        isOpen: isModalOpen,
      })}
    </>
  );
};
