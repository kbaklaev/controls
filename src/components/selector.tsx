import React, { useState } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import ReactTooltip from "react-tooltip";

import "./selector.scss";

const methods = [
  {
    id: 1,
    value: "month",
    label: "Оклад за месяц",
  },
  {
    id: 2,
    value: "mrot",
    label: "МРОТ",
  },
  {
    id: 3,
    value: "day",
    label: "Оплата за день",
  },
  {
    id: 4,
    value: "hour",
    label: "Оплата за час",
  },
];

interface SelectorProps {
  initialValues: {
    method: string;
    withoutTax: boolean;
    salary: number;
  };
}

let Selector: React.FC<
  SelectorProps & InjectedFormProps<{}, SelectorProps>
> = () => {
  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className="selector">
      <span className="text-black-50">Сумма</span>
      <section id="radio-buttons d-flex flex-column">
        {methods.map((method) => (
          <div key={method.id} className="d-flex justify-content-start">
            <label className="col">
              <Field
                name="method"
                component="input"
                type="radio"
                value={method.value}
              />
              {` ${method.label}`}
            </label>
            <div onClick={handleClick}>
              {method.value === "mrot" && (
                <div className="btncircle">
                  <p
                    data-tip="МРОТ - минимальный размер оплаты труда.<br/>Разный для разных регионов."
                  >
                    {toggle ? <span>i</span> : <span>&#10006;</span>}
                  </p>
                  <ReactTooltip
                    place="bottom"
                    effect="solid"
                    backgroundColor="SlateBlue"
                    multiline={true}
                    possibleCustomEvents="true"
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
  form: "controls",
})(Selector);
