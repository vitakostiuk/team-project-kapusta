import React from 'react';
import * as Styled from './Period.styled';
import Arrow from '../Arrow';
import BigArrow from '../../../images/arrow-left.svg';

const Period = () => {
  return (
    <Styled.Container>
      <Styled.Button>
        <Styled.BigArrow src={BigArrow} />
      </Styled.Button>
      <Styled.SubText>Поточний період:</Styled.SubText>
      <Styled.PeriodWrapper>
        <Arrow />

        <Arrow rotate="true" />
      </Styled.PeriodWrapper>
      <Styled.SubText>Баланс:</Styled.SubText>
      <Styled.Balance></Styled.Balance>
    </Styled.Container>
  );
};

export default Period;
