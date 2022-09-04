import React from 'react';
import ButtonGoMain from './ButtonGoMain';
import BalanceComp from '../../common/BalanceComp';
import Period from './Period';
import * as Styled from './BalanceContainer.styled';

const BalanceContainer = () => {
  return (
    <Styled.Container>
      <ButtonGoMain />
      <Styled.Balance>
        <Period />
        <BalanceComp />
        {/* <BalanceSum /> */}
      </Styled.Balance>
    </Styled.Container>
  );
};

export default BalanceContainer;
