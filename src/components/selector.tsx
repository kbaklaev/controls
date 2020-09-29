import React, { useState } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Tooltip from './tooltip';

import './selector.scss';

const TOOLTIP_TEXT = 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов.'

const methods = [
  {
    id: 1,
    value: 'month',
    label: 'Оклад за месяц',
  },
  {
    id: 2,
    value: 'mrot',
    label: 'МРОТ',
  },
  {
    id: 3,
    value: 'day',
    label: 'Оплата за день',
  },
  {
    id: 4,
    value: 'hour',
    label: 'Оплата за час',
  },
];

interface SelectorProps {
  initialValues: {
    method: string;
    withoutTax: boolean;
    salary: number;
  };
}

let Selector: React.FC<SelectorProps & InjectedFormProps<{}, SelectorProps>> = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="selector">
      <span className="text-black-50">Сумма</span>
      <section id="radio-buttons d-flex flex-column">
        {methods.map((method) => (
          <div key={method.id} className="d-flex justify-content-start">
            <label className="col">
              <Field name="method" component="input" type="radio" value={method.value} />
              {` ${method.label}`}
            </label>
            <div onClick={handleClick}>
              {method.value === 'mrot' && (
                <div className="btncircle" onClick={handleClick}>
                  <Tooltip
                    label={toggle ? 'i' : 'X'}
                    tooltipText={TOOLTIP_TEXT}
                    click={toggle}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default reduxForm<{}, SelectorProps>({
  form: 'controls',
})(Selector);
