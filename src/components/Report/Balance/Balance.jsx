import React from 'react';
import * as Styled from './Balance.styled';

const Balance = () => {
  return (
    <Styled.Container>
      <Styled.MoneyWrapper>
        <Styled.Balance>Balance:</Styled.Balance>
        <Styled.Money>55 000</Styled.Money>
      </Styled.MoneyWrapper>
    </Styled.Container>
  );
};

export default Balance;
