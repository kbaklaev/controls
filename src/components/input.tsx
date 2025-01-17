import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import './input.scss';

interface InputProps {
  method: string;
}

const Input: React.FC<InputProps & InjectedFormProps<{}, InputProps>> = ({ method }) => {
  const formatSalaryFormat = (input: string) => {
    if (!input) return;
    return input.replace(/ /g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const normalizeSalaryFormat = (input: string) => {
    if (!input) return;
    return input.replace(/ /g, "");
  };

  return (
    <div className="salary-input">
      <Field
        name="salary"
        component="input"
        type="text"
        className="input"
        format={formatSalaryFormat}
        normalize={normalizeSalaryFormat}        
      />
      <label className="font-weight-bold">
        {' '}
        &#8381; {method === 'day' ? 'в день' : method === 'hour' ? 'в час' : null}
      </label>
    </div>
  );
};

export default reduxForm<{}, InputProps>({
  form: 'controls',
})(Input);
