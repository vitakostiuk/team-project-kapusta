import React from 'react';
import { Link } from 'react-router-dom';
import s from './ButtonGoMain.module.css';
import BigArrow from '../../../images/arrow-left.svg';

const ButtonGoMain = () => {
  return (
    <div className={s.container}>
      <Link to="../" className={s.link}>
        <img src={BigArrow} alt="big arrow" />
        <p className={s.text}>Main page</p>
      </Link>
    </div>
  );
};

export default ButtonGoMain;
