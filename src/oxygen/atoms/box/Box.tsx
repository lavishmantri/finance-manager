import { Box as MantineBox, BoxProps as MantineBoxProps } from '@mantine/core';

interface BoxProps extends MantineBoxProps {}

export const Box = (props: BoxProps) => {
  return <MantineBox {...props} />;
};
