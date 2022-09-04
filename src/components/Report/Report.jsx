import React from 'react';
import BalanceContainer from './BalanceContainer';
import BalanceChange from './BalanceChange';
import ExpIncContainer from './ExpIncContainer';
import s from './Report.module.css';

const Report = () => {
  return (
    <section className={s.section}>
      <BalanceContainer />
      <BalanceChange />
      <ExpIncContainer />
    </section>
  );
};

export default Report;
