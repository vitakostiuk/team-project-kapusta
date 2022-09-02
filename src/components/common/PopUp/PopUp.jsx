import React from 'react';
import s from './PopUp.module.css';

const PopUp = () => {
  return (
    <div className={s.popUpContainer}>
      <p className={s.popUpText}>
        Hello! To get started, enter the current balance of your account!
      </p>
      <p className={s.popUpTextBottom}>
        You can't spend money until you have it :&#41;
      </p>
    </div>
  );
};

export default PopUp;
