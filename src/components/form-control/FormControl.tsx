import { Children, ReactElement } from 'react';
import { NumberInput, TextInput } from '../../oxygen/atoms/input';
import { Select, SelectOption } from '../../oxygen/atoms/select/Select';
import styles from './form-control.module.scss';

export enum FormControlType {
  TextInput = 'TextInput',
  NumberInput = 'NumberInput',
  SingleSelect = 'SingleSelect',
  MultiSelect = 'MultiSelect',
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
  if (!type) {
    throw 'prop `type` needs to be mentioned';
  }

  Children.forEach(children, child => {
    if (child.type === TextInput) {
    } else if (child.type === NumberInput) {
    } else if (child.type === Select) {
    } else {
      throw 'Only defined components can be child of FormControl';
    }
  });

  return (
    <div className={styles.formControl}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
};
