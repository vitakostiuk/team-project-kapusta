import React from 'react';
import BalanceContainer from './BalanceContainer';
import BalanceChange from './BalanceChange';
import ExpIncContainer from './ExpIncContainer';
// import Statistic from './Statistic';
import s from './Report.module.css';

const Report = () => {
  return (
    <section>
      <BalanceContainer />
      <BalanceChange />
      <ExpIncContainer />
      {/* <Statistic /> */}
    </section>
  );
};

export default Report;
