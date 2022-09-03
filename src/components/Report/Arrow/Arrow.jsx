import React from 'react';
import * as Styled from './Arrow.styled';
import arrowSmall from '../../../images/arrow-small-left.svg';

const Arrow = ({ rotate }) => {
  return (
    <>
      <Styled.Image rotate={rotate} src={arrowSmall} />
    </>
  );
};

export default Arrow;
