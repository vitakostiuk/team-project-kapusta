import React from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import s from './PopUp.module.css';

// const popupRoot = document.querySelector('#popup-root');

const PopUp = () => {
  const type = useLocation().pathname;

  return (
    <div
      className={
        type === '/expenses' || type === '/income'
          ? s.popUpContainer
          : s.popUpContainerReport
      }
    >
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
