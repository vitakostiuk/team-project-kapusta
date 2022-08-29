import React from 'react';
import * as Styled from './Period.styled';
import Arrow from '../Arrow';

const Period = () => {
  return (
    <Styled.Container>
      <Styled.Period>Current period:</Styled.Period>
      <Styled.PeriodWrapper>
        <Arrow />
        <Styled.Date>
          <Styled.Month>NOVEMBER</Styled.Month>
          <Styled.Year>2020</Styled.Year>
        </Styled.Date>
        <Arrow rotate="true" />
      </Styled.PeriodWrapper>
    </Styled.Container>
  );
};

export default Period;
