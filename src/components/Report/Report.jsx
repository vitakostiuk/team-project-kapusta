import React from 'react';
import Period from './Period';
import BalanceChange from './BalanceChange';
import Categories from './Categories';
import Statistic from './Statistic';
import * as Styled from './Report.styled';

const Report = () => {
  return (
    <Styled.Container>
      <Period />
      <BalanceChange />
      <Categories />
      <Statistic />
    </Styled.Container>
  );
};

export default Report;
