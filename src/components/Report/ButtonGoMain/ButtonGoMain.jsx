import React from 'react';
import * as Styled from './ButtonGoMain.styled';
import BigArrow from '../../../images/arrow-left.svg';

const ButtonGoMain = () => {
  return (
    <Styled.Container>
      <Styled.Button>
        <Styled.BigArrow src={BigArrow} />
      </Styled.Button>
      <Styled.Text>Main page</Styled.Text>
    </Styled.Container>
  );
};

export default ButtonGoMain;
