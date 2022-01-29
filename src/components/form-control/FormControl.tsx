import { Input } from '../input';

interface FormControlProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormControl = ({ label, value, onChange }: FormControlProps) => {
  return (
    <div>
      <label></label>
      <Input value={value} onChange={onChange} />
    </div>
  );
};
