import { PropsWithChildren } from 'react';
import styles from './typography.module.scss';

export enum TypographyVariants {
  HEADING1 = 'HEADING1',
  HEADING2 = 'HEADING2',
}

interface TypographyProps {
  variant: TypographyVariants;
}

export const Typography = ({ children, variant }: PropsWithChildren<TypographyProps>) => {
  return <div className={styles.typographyContainer}>{children}</div>;
};
