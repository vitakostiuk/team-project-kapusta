import React from 'react';
import * as Styled from './ButtonGoMain.styled';
import s from './ButtonGoMain.module.css';
import BigArrow from '../../../images/arrow-left.svg';
import { Link } from 'react-router-dom';

const ButtonGoMain = () => {
  return (
    <Styled.Container>
      <Link to="../" className={s.link} type="button">
        <Styled.BigArrow src={BigArrow} />
        <Styled.Text>Main page</Styled.Text>
      </Link>
    </Styled.Container>
  );
};

export default ButtonGoMain;
