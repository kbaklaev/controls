import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Switcher: React.FC = () => {
  return (
    <div>
      <div className="custom-control custom-switch">
        <Field
          name="w/oNdfl"
          component="input"
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          Без НДФЛ
        </label>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'controls',
})(Switcher);
