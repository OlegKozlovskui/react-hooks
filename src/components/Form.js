import React from 'react';

import { useFrom } from '../hooks/useForm';
import { useMeasure } from '../hooks/useMeasure';

const Form = () => {
  const [values, handleChange] = useFrom({ email: '', password: '', bio: '' });
  const [rect, bioRef] = useMeasure([values.bio]);
  
  return (
    <>
      <strong ref={bioRef}>
        {values.bio}
      </strong>
      <pre>
        {JSON.stringify(rect, null, 2)}
      </pre>
      <hr/>
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
        <textarea
          name="bio"
          value={values.bio}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Form;
