import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/feature/auth-selectors';
import axios from 'axios';
import { ReactComponent as Diagram } from '../../images/diagram.svg';
import { Link } from 'react-router-dom';
import s from './Balance.module.css';

//vitagrebennik@gmail.com

const Balance = () => {
  const [balance, setBalance] = useState('00.00 UAH');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  // const dispatch = useDispatch();
  const AUTH_TOKEN = useSelector(authSelectors.getToken);

  // useEffect(() => {
  //   const { data, isSuccess, isLoading } = useFetchCurrentUserQuery();
  //   const dispatch = useDispatch();
  //   const getBalance = () => {
  //     try {
  //       axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  //       axios.defaults.baseURL = 'http://localhost:3000';
  //       const { data } = axios.get('/api/users/balance');
  //       console.log(data);
  //       // dispatch(refreshUser(data));
  //       // dispatch(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBalance();
  // }, [AUTH_TOKEN]);

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
      <div className={s.formContainer}>
        <div className={s.reportContainer}>
          <Link to="report" className={s.reportLink} type="button">
            Reports
          </Link>
          <Diagram />
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <label htmlFor="balance" className={s.label}>
            Balance:
          </label>
          <div className={s.btnsContainer}>
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
          </div>
        </form>
        {balance === '00.00 UAH' && (
          <div className={s.popUpContainer}>
            <p className={s.popUpText}>
              Hello! To get started, enter the current balance of your account!
            </p>
            <p className={s.popUpTextBottom}>
              You can't spend money until you have it :&#41;
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Balance;
