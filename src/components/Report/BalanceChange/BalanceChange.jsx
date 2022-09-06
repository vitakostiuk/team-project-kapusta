import React from 'react';
import { useSelector } from 'react-redux';
import s from './BalanceChange.module.css';

const BalanceChange = () => {
  const expenses = useSelector(state => state.expenses);

  return (
    <div className={s.container}>
      <div className={s.sumWrapper}>
        <div className={s.decrementWrapper}>
          <p className={s.subtitle}>Expenses:</p>
          <p className={s.decrement}>
            {expenses.expenses ? `- ${expenses.expenses} uah.` : 0}
          </p>
        </div>
        <div className={s.incrementWrapper}>
          <p className={s.subtitle}>Income:</p>
          <p className={s.increment}>
            {expenses.income ? `+ ${expenses.income} uah.` : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceChange;
