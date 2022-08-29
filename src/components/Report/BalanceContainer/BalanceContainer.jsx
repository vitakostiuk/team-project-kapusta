import React from 'react';
import ButtonGoMain from '../ButtonGoMain';
import BalanceSum from '../BalanceSum';
import Period from '../Period';
import * as Styled from './BalanceContainer.styled';

const BalanceContainer = () => {
  return (
    <Styled.Container>
      <ButtonGoMain />
      <Styled.Balance>
        <Period />
        <BalanceSum />
      </Styled.Balance>
    </Styled.Container>
  );
};

export default BalanceContainer;
