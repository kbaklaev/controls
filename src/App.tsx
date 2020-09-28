import React from 'react';
import './app.scss';
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

import Selector from './components/selector';
import Switcher from './components/switcher';
import Input from './components/input'
import Summary from './components/summary';

interface AppProps {
  values: any
}

const App: React.FC<AppProps> = ({ values }) => {
  const salary = values && parseInt(values.salary)
  const taxState = values && values['w/oNdfl']
  const method = values && values.method

  return (
    <div className="container text-body">
      <div className="d-flex flex-column justify-content-center controls">
        <Selector />
        <Switcher />
        <Input method={method} />
        <Summary salary={salary as number} taxState={taxState as boolean} />
      </div>
    </div>
  );
};

export default connect((state) => ({
  values: getFormValues("controls")(state),
}))(App);

