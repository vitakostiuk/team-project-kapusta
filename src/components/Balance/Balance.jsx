import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Diagram } from '../../images/diagram.svg';
import { Link } from 'react-router-dom';
import {
  useGetBalanceQuery,
  useChangeBalanceMutation,
} from 'redux/user/userApi';
import { setBalance } from 'redux/Balance/balanceSlice';
// import authSelectors from 'redux/feature/auth-selectors';
import s from './Balance.module.css';

const Balance = () => {
  const balance = useSelector(state => state.balance);
  const { data, error, isLoading } = useGetBalanceQuery();
  const [value, setValue] = useState(balance);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const dispatch = useDispatch();
  const [changeBalance] = useChangeBalanceMutation();

  useEffect(() => {
    dispatch(
      setBalance(
        Number(data)
          .toLocaleString('cs-CZ', {
            style: 'currency',
            currency: 'UAH',
          })
          .replace(',', '.'),
      ),
    );
  }, [data, dispatch]);

  const handleChange = e => {
    setValue(e.target.value);
    setIsDisabledBtn(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setValue(
      Number(value)
        .toLocaleString('cs-CZ', {
          style: 'currency',
          currency: 'UAH',
        })
        .replace(',', '.'),
    );

    try {
      const { data } = await changeBalance({ balance: Number(value) });
      dispatch(
        setBalance(
          Number(data.balance)
            .toLocaleString('cs-CZ', {
              style: 'currency',
              currency: 'UAH',
            })
            .replace(',', '.'),
        ),
      );
    } catch (error) {
      console.log(error);
    }

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
              value={value}
              // placeholder={balance}
              onChange={handleChange}
              minLength="1"
              pattern="^[0-9]+$"
              title="Field may contain only numbers from 0 to 9"
              required
              onFocus={() => setValue('')}
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
        {balance === '0.00 UAH' && (
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
