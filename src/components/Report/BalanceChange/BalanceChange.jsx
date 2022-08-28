import React from 'react';
import * as Styled from './BalanseChange.styled';

const BalanceChange = () => {
  return (
    <Styled.Container>
      <Styled.SumWrapper>
        <Styled.IncrementWrapper>
          <Styled.Subtitle>
            Expences:
            <Styled.Decrement>- 10 000000000 uah</Styled.Decrement>
          </Styled.Subtitle>
        </Styled.IncrementWrapper>
        <Styled.DecrementWrapper>
          <Styled.Subtitle>
            Income:
            <Styled.Increment>+ 10 00000000 uah</Styled.Increment>
          </Styled.Subtitle>
        </Styled.DecrementWrapper>
      </Styled.SumWrapper>
    </Styled.Container>
  );
};

export default BalanceChange;
