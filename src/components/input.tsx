import React, { useEffect } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import './input.scss';

interface InputProps {
  method: string;
}

const Input: React.FC<InputProps & InjectedFormProps<{}, InputProps>> = ({ method }) => {
  useEffect(() => {
    console.log(method);
  }, [method]);

  return (
    <div className="salary-input">
      <Field name="salary" component="input" type="text" className="input" />
      <label> &#8381; </label>
    </div>
  );
};

export default reduxForm<{}, InputProps>({
  form: 'controls',
})(Input);
