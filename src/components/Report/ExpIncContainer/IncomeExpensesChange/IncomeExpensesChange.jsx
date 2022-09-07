import React from 'react';
import s from './IncomeExpensesChange.module.css';
import Arrow from '../../../../images/report/sprite-icons.svg';

const IncomeExpensesChange = ({ onChange, incExp }) => {
  return (
    <div className={s.title}>
      <button className={s.btn} onClick={onChange}>
        <svg className={s.picture}>
          <use xlinkHref={`${Arrow}#icon-arrow-left`} />
        </svg>
      </button>

      <p className={s.text}>{incExp}</p>

      <button className={s.btn} onClick={onChange}>
        <svg className={s.picture}>
          <use xlinkHref={`${Arrow}#icon-arrow-right`} />
        </svg>
      </button>
    </div>
  );
};

export default IncomeExpensesChange;
