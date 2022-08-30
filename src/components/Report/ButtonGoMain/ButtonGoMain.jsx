import React from 'react';
import * as Styled from './ButtonGoMain.styled';
import BigArrow from '../../../images/arrow-left.svg';

const ButtonGoMain = () => {
  return (
    <Styled.Container>
      <Styled.Link>
        <Styled.BigArrow src={BigArrow} />
        <Styled.Text href="">Main page</Styled.Text>
      </Styled.Link>
    </Styled.Container>
  );
};

export default ButtonGoMain;
