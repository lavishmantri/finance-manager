import ReactSelect, { ActionMeta, SingleValue } from 'react-select';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (opt: SelectOption) => void;
  multiple?: boolean;
}

export const Select = ({ options, onChange, multiple = false }: SelectProps) => {
  const handleSelect = (value: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => {
    if (value) {
      onChange(value);
    }
  };
  return <ReactSelect options={options} onChange={handleSelect} />;
};
