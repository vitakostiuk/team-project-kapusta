import React from 'react';
import BalanceContainer from './BalanceContainer';
import BalanceChange from './BalanceChange';
import Expenses from './Expenses';
// import Statistic from './Statistic';
import * as Styled from './Report.styled';

const Report = () => {
  return (
    <Styled.Section>
      <BalanceContainer />
      <BalanceChange />
      <Expenses />
      {/* <Statistic /> */}
    </Styled.Section>
  );
};

export default Report;
