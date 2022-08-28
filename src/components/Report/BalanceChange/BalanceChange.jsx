import React from 'react';
import * as Styled from './BalanseChange.styled';

const BalanceChange = () => {
  return (
    <Styled.Container>
      <Styled.DecrementWrapper>
        <Styled.Subtitle>Витрати:</Styled.Subtitle>
        <Styled.Decrement>- Some value</Styled.Decrement>
      </Styled.DecrementWrapper>
      <Styled.IncrementWrapper>
        <Styled.Subtitle>Доходи:</Styled.Subtitle>
        <Styled.Increment>+ Some value</Styled.Increment>
      </Styled.IncrementWrapper>
    </Styled.Container>
  );
};

export default BalanceChange;
