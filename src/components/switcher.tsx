import React from "react";
import { Field, reduxForm } from "redux-form";

import "./switcher.scss";

let Switcher: React.FC = () => {
  return (
    <div>
      <div className="custom-control custom-switch switcher">
        <label htmlFor="customSwitch">Указать с НДФЛ</label>
        <Field
          name="withoutTax"
          component="input"
          type="checkbox"
          className="custom-control-input"
          id="customSwitch"
        />
        <label
          className="custom-control-label with-ndfl"
          htmlFor="customSwitch"
        >
          Без НДФЛ
        </label>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "controls",
})(Switcher);
