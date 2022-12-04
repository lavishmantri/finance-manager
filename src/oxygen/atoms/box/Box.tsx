import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react';

interface BoxProps extends ChakraBoxProps {}

export const Box = (props: BoxProps) => {
  return <ChakraBox {...props} />;
};
