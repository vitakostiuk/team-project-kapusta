import React from 'react';
import * as Styled from './ButtonGoHome.styled';
import BigArrow from '../../../images/arrow-left.svg';

const ButtonGoHome = () => {
  return (
    <Styled.Button>
      <Styled.BigArrow src={BigArrow} />
    </Styled.Button>
  );
};

export default ButtonGoHome;
