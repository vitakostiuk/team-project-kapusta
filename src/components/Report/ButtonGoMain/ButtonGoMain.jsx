import React from 'react';
import * as Styled from './ButtonGoMain.styled';
import BigArrow from '../../../images/arrow-left.svg';

const ButtonGoMain = () => {
  return (
    <Styled.Container>
      <Styled.Link>
        <Styled.BigArrow src={BigArrow} />
      </Styled.Link>
      <Styled.Text>Main page</Styled.Text>
    </Styled.Container>
  );
};

export default ButtonGoMain;
