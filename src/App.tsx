import React from "react";
import "./app.scss";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

import Selector from "./components/selector";
import Switcher from "./components/switcher";
import Input from "./components/input";
import Summary from "./components/summary";

const initialValues = {
  method: "month",
  withoutTax: true,
};

interface AppProps {
  values: any;
}

const App: React.FC<AppProps> = ({ values }) => {
  const salary = parseInt(values?.salary);
  const taxState = values?.withoutTax;
  const method = values?.method;

  return (
    <div className="container text-body" style={{width: '25em'}}>
      <div className="d-flex flex-column justify-content-center controls">
        <Selector initialValues={initialValues} />
        <Switcher taxState={taxState} />
        <Input method={method} />
        {method === "month" && !!salary && (
          <Summary salary={salary as number} taxState={taxState as boolean} />
        )}
      </div>
    </div>
  );
};

export default connect((state) => ({
  values: getFormValues("controls")(state),
}))(App);
