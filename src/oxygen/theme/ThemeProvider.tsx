import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
