import React from 'react';
import { useFrom } from '../hooks/useForm';

const Form = () => {
  const [values, handleChange] = useFrom({ email: '', password: '' });
  
  return (
    <form>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
