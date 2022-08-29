import React from 'react';
import BalanceContainer from './BalanceContainer';
import BalanceChange from './BalanceChange';
import Expences from './Expences';
import Statistic from './Statistic';
import * as Styled from './Report.styled';

const Report = () => {
  return (
    <Styled.Section>
      <BalanceContainer />
      <BalanceChange />
      <Expences />
      <Statistic />
    </Styled.Section>
  );
};

export default Report;
