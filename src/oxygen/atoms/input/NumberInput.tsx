import { BaseInput, BaseInputProps } from './BaseInput';

interface NumberInputProps extends Omit<BaseInputProps<'number'>, 'type' | 'onChange'> {
  onChange: (value: number) => void;
}

export const NumberInput = (props: NumberInputProps) => {
  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(evt.target.valueAsNumber);
  };

  return <BaseInput {...props} onChange={handleOnChange} type="number" />;
};
