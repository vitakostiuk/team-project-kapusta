import React from 'react';
import * as Styled from './Period.styled';
import Arrow from '../Arrow';
import BigArrow from '../../../images/arrow-left.svg';

const Period = () => {
  return (
    <Styled.Container>
      <Styled.Button type="button">
        <Styled.BigArrow src={BigArrow} />
      </Styled.Button>
      <Styled.SubText>Поточний період:</Styled.SubText>
      <Styled.PeriodWrapper>
        <Arrow type="button" />
        <Styled.ChosenPeriod>My period</Styled.ChosenPeriod>
        <Arrow rotate="true" type="button" />
      </Styled.PeriodWrapper>
      <Styled.SubText weight="500">Баланс:</Styled.SubText>
      <Styled.Balance>Some value</Styled.Balance>
    </Styled.Container>
  );
};

export default Period;
