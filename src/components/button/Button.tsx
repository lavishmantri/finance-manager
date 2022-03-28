import cx from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

export enum ButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

interface ButtonProps {
  onClick: () => void;
  variant?: ButtonVariants;
}

export const Button = ({
  onClick,
  variant = ButtonVariants.SECONDARY,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.tertiary]: variant === ButtonVariants.TERTIARY,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
