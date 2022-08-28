import React from 'react';
import * as Styled from './BalanseChange.styled';

const BalanceChange = () => {
  return (
    <Styled.Container>
      <Styled.IncrementWrapper>
        <Styled.Subtitle>Витрати:</Styled.Subtitle>
        <Styled.Decrement></Styled.Decrement>
      </Styled.IncrementWrapper>
      <Styled.DecrementWrapper>
        <Styled.Subtitle>Доходи:</Styled.Subtitle>
        <Styled.Increment></Styled.Increment>
      </Styled.DecrementWrapper>
    </Styled.Container>
  );
};

export default BalanceChange;
