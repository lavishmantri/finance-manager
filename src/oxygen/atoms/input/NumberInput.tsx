import { BaseInput, BaseInputProps, InputValue } from './BaseInput';

interface NumberInputProps extends Omit<BaseInputProps<'number'>, 'type'> {
  onChange: (value: number) => void;
}

export const NumberInput = (props: NumberInputProps) => {
  const handleChange = (val: InputValue<'number'>) => {
    props.onChange(val);
  };

  return <BaseInput {...props} onChange={handleChange} type="number" />;
};
