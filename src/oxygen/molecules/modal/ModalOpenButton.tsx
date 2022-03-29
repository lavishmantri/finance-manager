import React, { PropsWithChildren } from 'react';
import { Button } from '../../atoms/button';

export interface ModalOpenButtonProps {
  onBtnClick?: () => void;
}

export const ModalOpenButton = ({
  children,
  onBtnClick = () => undefined,
}: PropsWithChildren<ModalOpenButtonProps>) => {
  return <Button onClick={onBtnClick}>{children}</Button>;
};
