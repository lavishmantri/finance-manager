import React from 'react';
import { EnterKey, TabKey } from '../../../utils/key-code';
import styles from './input.module.scss';

export declare type InputType = 'text' | 'number';
export declare type InputValue<Type extends InputType> = Type extends 'text' ? string : number;

export interface BaseInputProps<Type extends InputType> {
  type: Type;
  onEnter?: (value: string) => void;
  onTab?: (value: string) => void;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value?: InputValue<Type>;
}

export const BaseInput = <Type extends InputType>({
  type,
  value,
  onChange,
  onEnter = () => {},
  onTab = () => {},
}: BaseInputProps<Type>) => {
  const handleKeyDown = (evt: React.KeyboardEvent) => {
    if (evt.code === TabKey) {
      evt.preventDefault();
      onTab((evt.target as HTMLInputElement).value);
      return false;
    }
  };
  const handleKeyUp = (evt: React.KeyboardEvent) => {
    if (evt.code === EnterKey) {
      onEnter((evt.target as HTMLInputElement).value);
      return;
    }

    if (evt.code === TabKey) {
      onTab((evt.target as HTMLInputElement).value);
      return;
    }
  };

  return (
    <input
      type={type}
      value={value}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      onChange={onChange}
      className={styles.input}
      autoFocus
    />
  );
};
