import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';

export const Button = (props: PolymorphicComponentProps<'button', MantineButtonProps>) => {
  return <MantineButton {...props} />;
};
