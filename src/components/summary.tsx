import React, { useEffect, useState } from 'react';

import './summary.scss';

const NDFL_AMOUNT = 13;

interface SummaryProps {
  salary?: number;
  taxState?: boolean;
}

const Summary: React.FC<SummaryProps> = ({ salary, taxState }) => {
  const [tax, setTax] = useState(0);
  const [payoff, setPayoff] = useState(0);

  // set tax
  useEffect(() => {
    if (salary) {
      !taxState
        ? setTax(Math.round((salary / 100) * NDFL_AMOUNT))
        : setTax(Math.round((salary / (100 - NDFL_AMOUNT)) * NDFL_AMOUNT));
    }
  }, [salary, taxState]);

  // set payoff
  useEffect(() => {
    if (salary) {
      !taxState ? setPayoff(salary) : setPayoff(tax + salary);
    }
  }, [salary, tax, taxState]);

  return (
    <div className="summary">
      <p>
        <span>{(payoff - tax).toLocaleString()}</span>
        {` `}&#8381; сотрудник будет получать на руки
      </p>
      <p>
        <span>{tax.toLocaleString()}</span>
        {` `}&#8381; НДФЛ, 13% от оклада
      </p>
      <p>
        <span>{payoff && payoff.toLocaleString()}</span>
        {` `}&#8381; за сотрудника в месяц
      </p>
    </div>
  );
};

export default Summary;
