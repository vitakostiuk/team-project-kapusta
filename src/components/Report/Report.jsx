import React from 'react';
import Balance from './Balance';
import Period from './Period';
import BalanceChange from './BalanceChange';
import Categories from './Categories';
import Statistic from './Statistic';
import * as Styled from './Report.styled';

const Report = () => {
  return (
    <Styled.Section>
      <Period />
      <Balance />
      <BalanceChange />
      <Categories />
      <Statistic />
    </Styled.Section>
  );
};

export default Report;
