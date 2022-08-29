import React from 'react';
import * as Styled from './BalanceSum.styled';

const BalanceSum = () => {
  return (
    <Styled.Container>
      <Styled.MoneyWrapper>
        <Styled.Balance>Balance:</Styled.Balance>
        <Styled.Money>55 000</Styled.Money>
        <Styled.Confirm>CONFIRM</Styled.Confirm>
      </Styled.MoneyWrapper>
    </Styled.Container>
  );
};

export default BalanceSum;
