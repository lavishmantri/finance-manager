import { Input } from '../input';
import styles from './form-control.module.scss';

interface FormControlProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormControl = ({ label, value, onChange }: FormControlProps) => {
  return (
    <div className={styles.formControl}>
      {label && <label>{label}</label>}
      <Input value={value} onChange={onChange} />
    </div>
  );
};
