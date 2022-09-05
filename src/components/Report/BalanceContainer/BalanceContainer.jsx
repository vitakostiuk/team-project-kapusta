import React from 'react';
import ButtonGoMain from './ButtonGoMain';
import BalanceComp from '../../common/BalanceComp';
import Period from './Period';
import s from './BalanceContainer.module.css';

const BalanceContainer = () => {
  return (
    <div className={s.container}>
      <ButtonGoMain />
      <div className={s.balance}>
        <Period />
        <BalanceComp />
      </div>
    </div>
  );
};

export default BalanceContainer;
