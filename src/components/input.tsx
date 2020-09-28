import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './input.scss';

const Input: React.FC = () => {
  return (
    <div className="salary-input">
      <Field name="salary" component="input" type="text" className="input" />
      <label> &#8381; </label>
    </div>
  );
};

export default reduxForm({
  form: 'controls'
})(Input)
