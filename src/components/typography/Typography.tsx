import { PropsWithChildren } from 'react';

enum Variants {
  HEADING1 = 'HEADING1',
  HEADING2 = 'HEADING2',
}

interface TypographyProps {
  variant: Variants;
}

export const Typography = ({ children, variant }: PropsWithChildren<TypographyProps>) => {
  return <div>{children}</div>;
};
