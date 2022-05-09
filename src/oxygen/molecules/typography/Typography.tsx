import cx from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './typography.module.scss';

export enum TypographyVariants {
  HEADING1 = 'HEADING1',
  HEADING2 = 'HEADING2',
  SUB_HEADING1 = 'SUB_HEADING1',
  SUB_HEADING2 = 'SUB_HEADING2',
  LABEL = 'LABEL',
  BODY1 = 'BODY1',
  BODY2 = 'BODY2',
}

interface TypographyProps {
  variant: TypographyVariants;
}

export const Typography = ({ children, variant }: PropsWithChildren<TypographyProps>) => {
  return (
    <div
      className={cx(styles.typographyContainer, {
        [styles[variant.toLowerCase()]]: true,
      })}
    >
      {children}
    </div>
  );
};
