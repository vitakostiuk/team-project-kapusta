import React from 'react';
import * as Styled from './Expences.styled';
import Arrow from '../Arrow';

const Expences = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        <Arrow />
        <Styled.Text>EXPENSES</Styled.Text>
        <Arrow rotate="true" />
      </Styled.Title>
      {/* <Styled.Categories> */}
      {/* <Styled.Category></Styled.Category> */}
      {/* </Styled.Categories> */}
    </Styled.Container>
  );
};

export default Expences;
