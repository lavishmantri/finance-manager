import { FormControl } from '../form-control';

export const AddTransaction = () => {
  const handleInputChange = (value: string) => {};

  return (
    <div>
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
      <FormControl label="" value="" onChange={handleInputChange} type="input" />
    </div>
  );
};
