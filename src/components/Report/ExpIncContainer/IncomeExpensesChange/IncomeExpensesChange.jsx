import React from 'react';
import s from './IncomeExpensesChange.module.css';
import Arrow from '../../Arrow';

const IncomeExpensesChange = ({ onChange, incExp }) => {
  return (
    <div className={s.title}>
      <button className={s.btn} onClick={onChange}>
        <Arrow />
      </button>

      <p className={s.text}>{incExp}</p>

      <button className={s.btn} onClick={onChange}>
        <Arrow rotate="true" />
      </button>
    </div>
  );
};

export default IncomeExpensesChange;
