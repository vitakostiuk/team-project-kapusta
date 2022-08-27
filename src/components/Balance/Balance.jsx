import { useState } from 'react';
import Section from '../common/Section';
import s from './Balance.module.css';

const Balance = () => {
  const [balance, setBalance] = useState('');

  const handleChange = e => {
    setBalance(e.target.value);
  };

  return (
    <>
      <Section>
        <div className={s.container}>
          <form className={s.form}>
            <label htmlFor="balance" className={s.label}>
              Balance:
            </label>
            <input
              id="#balance"
              className={s.input}
              type="text"
              name="balance"
              value={balance}
              onChange={handleChange}
              required
            />
            <button type="submit" className={s.button}>
              Confirm
            </button>
          </form>
          {balance === '0' && (
            <div className={s.popUpContainer}>
              <p className={s.popUpText}>
                Hello! To get started, enter the current balance of your
                account!
              </p>
              <p className={s.popUpTextBottom}>
                You can't spend money until you have it
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Balance;
