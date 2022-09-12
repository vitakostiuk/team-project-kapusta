import React from 'react';
import { Link } from 'react-router-dom';
import s from './ButtonGoMain.module.css';
import Icons from '../../../../images/report/sprite-icons.svg';

const ButtonGoMain = () => {
  return (
    <div className={s.container}>
      <Link to="../" className={s.link}>
        <button className={s.btn}>
          <svg className={s.picture}>
            <use xlinkHref={`${Icons}#icon-button-go-main`} />
          </svg>
        </button>
        <p className={s.text}>Main page</p>
      </Link>
    </div>
  );
};

export default ButtonGoMain;
