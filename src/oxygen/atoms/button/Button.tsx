import cx from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

export enum ButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export interface ButtonProps {
  onClick: () => void;
  variant?: ButtonVariants;
  className?: string;
}

export const Button = ({
  onClick,
  variant = ButtonVariants.SECONDARY,
  children,
  className = '',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx(className, styles.button, {
        [styles.tertiary]: variant === ButtonVariants.TERTIARY,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
