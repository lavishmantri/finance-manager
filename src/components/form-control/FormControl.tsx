import { Textarea } from '@mantine/core';
import { Children, ReactElement } from 'react';
import { DatePicker } from '../../oxygen/atoms/date-picker/DatePicker';
import { NumberInput, TextInput } from '../../oxygen/atoms/input';
import { Select, SelectOption } from '../../oxygen/atoms/select/Select';
import { useFormControlStyles } from './form-control.styles';

export enum FormControlType {
  TextInput = 'TextInput',
  NumberInput = 'NumberInput',
  SingleSelect = 'SingleSelect',
  MultiSelect = 'MultiSelect',
  DatePicker = 'DatePicker',
}

export declare type FormControlValue<Type extends FormControlType> =
  Type extends FormControlType.TextInput
    ? string
    : Type extends FormControlType.NumberInput
    ? number
    : Type extends FormControlType.SingleSelect
    ? SelectOption
    : SelectOption[];

interface FormControlProps<Type extends FormControlType> {
  label: string;
  type: Type;
  children: ReactElement;
}

export const FormControl = <Type extends FormControlType>({
  type,
  label,
  children,
}: FormControlProps<Type>) => {
  const styles = useFormControlStyles();
  if (!type) {
    throw 'prop `type` needs to be mentioned';
  }

  Children.forEach(children, child => {
    if (child.type === TextInput) {
    } else if (child.type === NumberInput) {
    } else if (child.type === Select) {
    } else if (child.type === DatePicker) {
    } else if (child.type === Textarea) {
    } else {
      throw 'Only defined components can be child of FormControl';
    }
  });

  return (
    <div className={styles.classes.formControl}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
};
