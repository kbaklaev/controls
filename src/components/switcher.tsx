import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './switcher.scss';

interface SwitcherProps {
  taxState: Boolean;
}

let Switcher: React.FC<SwitcherProps> = ({ taxState }) => {
  const activeStyle = (state: Boolean) => (state ? 'text-secondary' : 'text-body');

  return (
    <div>
      <div className="custom-control custom-switch switcher">
        <label htmlFor="customSwitch" className={activeStyle(taxState)}>
          Указать с НДФЛ
        </label>
        <Field name="withoutTax" component="input" type="checkbox" className="custom-control-input" id="customSwitch" />
        <label className={`custom-control-label with-ndfl ${activeStyle(!taxState)}`} htmlFor="customSwitch">
          Без НДФЛ
        </label>
      </div>
    </div>
  );
};

export default reduxForm<{}, SwitcherProps>({
  form: 'controls',
})(Switcher);
