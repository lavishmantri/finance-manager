import { useState } from 'react';
import { FormControl } from '../form-control';

export const AddLoanAccount = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (val: string) => {
    setName(val);
  };

  const handleDescriptionChange = (val: string) => {
    setDescription(val);
  };

  return (
    <div>
      <FormControl label="Name" value={name} onChange={handleNameChange} type="input" />
      <FormControl
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        type="input"
      />
    </div>
  );
};
