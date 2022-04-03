import { BaseInput, BaseInputProps, InputValue } from './BaseInput';

interface TextInputProps extends Omit<BaseInputProps<'text'>, 'type'> {
  onChange: (value: string) => void;
}

export const TextInput = (props: TextInputProps) => {
  const handleChange = (val: InputValue<'text'>) => {
    props.onChange(val);
  };

  return <BaseInput {...props} onChange={handleChange} type="text" />;
};
