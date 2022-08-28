import React from 'react';
import * as Styled from './Period.styled';

const Period = () => {
  return (
    <Styled.Container>
      <Styled.Button />
      <Styled.SubText>Поточний період:</Styled.SubText>
      <Styled.PeriodWrapper></Styled.PeriodWrapper>
      <Styled.SubText>Баланс:</Styled.SubText>
      <Styled.Balance></Styled.Balance>
    </Styled.Container>
  );
};

export default Period;
