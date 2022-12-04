import { MantineProvider } from '@mantine/core';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  return <MantineProvider>{children}</MantineProvider>;
};
