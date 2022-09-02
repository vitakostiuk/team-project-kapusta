import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Diagram } from '../../images/diagram.svg';
import { Link } from 'react-router-dom';
import PopUp from 'components/common/PopUp';
import {
  useGetBalanceQuery,
  useChangeBalanceMutation,
} from 'redux/user/userApi';
import { useFullTransactionsQuery } from 'redux/report/transactionsApi';
import { setBalance } from 'redux/Balance/balanceSlice';
import { getNormalizedSum } from 'helpers/getNormalizedSum';
// import authSelectors from 'redux/feature/auth-selectors';
import s from './Balance.module.css';

const Balance = () => {
  const balance = useSelector(state => state.balance);
  const {
    data,
    isSuccess,
    // error,
    // isLoading
  } = useGetBalanceQuery();
  console.log('balance from api', data);
  const result = useFullTransactionsQuery({ month: 2, year: 2022 });
  console.log('transactions', result.data);
  const [value, setValue] = useState('');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isShowPopUp, setIsShowPopUp] = useState(true);
  const dispatch = useDispatch();
  const [changeBalance] = useChangeBalanceMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setBalance(getNormalizedSum(data)));
      setValue(getNormalizedSum(data));
    }
  }, [data, dispatch, isSuccess]);

  const handleChange = e => {
    setValue(e.target.value);
    setIsDisabledBtn(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setValue(getNormalizedSum(value));
    setIsShowPopUp(false);
    try {
      const { data } = await changeBalance({ balance: Number(value) });
      dispatch(setBalance(getNormalizedSum(data.balance)));
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
              onChange={handleChange}
              minLength="1"
              pattern="^[0-9]+$"
              title="Field may contain only numbers from 0 to 9"
              required
              onFocus={() => {
                if (data === 0) {
                  setValue('');
                }
              }}
              readOnly={data !== 0}
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
        {data === 0 && isShowPopUp && <PopUp />}
      </div>
    </>
  );
};

export default Balance;
