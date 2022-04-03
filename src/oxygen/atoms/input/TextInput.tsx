import { BaseInput, BaseInputProps } from './BaseInput';

interface TextInputProps extends Omit<BaseInputProps<'text'>, 'type' | 'onChange'> {
  onChange: (value: string) => void;
}

export const TextInput = (props: TextInputProps) => {
  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(evt.target.value);
  };

  return <BaseInput {...props} onChange={handleOnChange} type="text" />;
};
