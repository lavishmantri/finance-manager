import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  date?: Date;
  onChange: (date: Date) => void;
}

export const DatePicker = ({ date, onChange }: DatePickerProps) => {
  return <ReactDatePicker selected={date} onChange={onChange} />;
};
