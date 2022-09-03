import React from 'react';
import s from './BalanceSum.module.css';

const BalanceSum = () => {
  return (
    <div className={s.container}>
      <div className={s.moneyWrapper}>
        <p className={s.balance}>Balance:</p>
        <p className={s.money}>55 000 uah</p>
        <button className={s.confirm}>CONFIRM</button>
      </div>
    </div>
  );
};

export default BalanceSum;
