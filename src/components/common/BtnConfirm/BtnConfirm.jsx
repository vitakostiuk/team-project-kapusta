import React from 'react';
import s from './BtnConfirm.module.css';

const BtnConfirm = ({ isDisabledBtn }) => {
  return (
    <button
      type="submit"
      className={!isDisabledBtn ? s.button : s.buttonDisabled}
      disabled={isDisabledBtn}
    >
      Confirm
    </button>
  );
};

export default BtnConfirm;
