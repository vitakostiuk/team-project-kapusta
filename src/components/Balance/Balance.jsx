import { useState } from 'react';
import Section from '../common/Section';
import s from './Balance.module.css';

const Balance = () => {
  const [balance, setBalance] = useState('00.00 UAH');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const handleChange = e => {
    setBalance(e.target.value);
    setIsDisabledBtn(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setBalance(
      Number(balance)
        .toLocaleString('cs-CZ', {
          style: 'currency',
          currency: 'UAH',
        })
        .replace(',', '.'),
    );
    setIsDisabledBtn(true);
  };

  return (
    <>
      <Section>
        <div className={s.container}>
          <form className={s.form} onSubmit={handleSubmit}>
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
              minLength="1"
              pattern="^[0-9]+$"
              title="Field may contain only numbers from 0 to 9"
              required
              onFocus={() => setBalance('')}
            />
            <button
              type="submit"
              className={!isDisabledBtn ? s.button : s.buttonDisabled}
              disabled={isDisabledBtn}
            >
              Confirm
            </button>
          </form>
          {balance === '00.00 UAH' && (
            <div className={s.popUpContainer}>
              <p className={s.popUpText}>
                Hello! To get started, enter the current balance of your
                account!
              </p>
              <p className={s.popUpTextBottom}>
                You can't spend money until you have it :&#41;
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Balance;
