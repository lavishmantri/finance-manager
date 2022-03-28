import { PropsWithChildren } from 'react';
import styles from './typography.module.scss';

export enum TypographyVariants {
  HEADING1 = 'HEADING1',
  HEADING2 = 'HEADING2',
  SUB_HEADING1 = 'SUB_HEADING1',
  SUB_HEADING2 = 'SUB_HEADING2',
  LABEL = 'LABEL',
}

interface TypographyProps {
  variant: TypographyVariants;
}

export const Typography = ({ children, variant }: PropsWithChildren<TypographyProps>) => {
  return <div className={styles.typographyContainer}>{children}</div>;
};
