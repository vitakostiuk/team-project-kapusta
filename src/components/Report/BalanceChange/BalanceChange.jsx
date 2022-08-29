import React from 'react';
import * as Styled from './BalanseChange.styled';

const BalanceChange = () => {
  return (
    <Styled.Container>
      <Styled.SumWrapper>
        <Styled.DecrementWrapper>
          <Styled.Subtitle>Expenses:</Styled.Subtitle>
          <Styled.Decrement>- 10 000.00 uah.</Styled.Decrement>
        </Styled.DecrementWrapper>
        <Styled.IncrementWrapper>
          <Styled.Subtitle>Income:</Styled.Subtitle>
          <Styled.Increment>+ 10 000.00 uah.</Styled.Increment>
        </Styled.IncrementWrapper>
      </Styled.SumWrapper>
    </Styled.Container>
  );
};

export default BalanceChange;
