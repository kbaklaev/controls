import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

let Selector: React.FC = () => {
  return (
    <div>
      <span className="text-black-50">Сумма</span>
      <section id="radio-buttons d-flex flex-column">
        {methods.map((method) => (
          <label className="col">
            <Field name="method" component="input" type="radio" value={method.value} />
            {` ${method.label}`}
            {method.value === 'mrot' && <button type="button">i</button>}
          </label>
        ))}
      </section>
    </div>
  );
};

export default reduxForm({
  form: 'controls',
})(Selector);
