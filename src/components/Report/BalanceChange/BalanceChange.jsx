import React from 'react';
import s from './BalanceChange.module.css';

const BalanceChange = () => {
  return (
    <div className={s.container}>
      <div className={s.sumWrapper}>
        <div className={s.decrementWrapper}>
          <p className={s.subtitle}>Expenses:</p>
          <p className={s.decrement}>- 10 000.00 uah.</p>
        </div>
        <div className={s.incrementWrapper}>
          <p className={s.subtitle}>Income:</p>
          <p className={s.increment}>+ 10 000.00 uah.</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceChange;
