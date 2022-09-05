import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from 'components/common/PopUp';
import {
  useGetBalanceQuery,
  useChangeBalanceMutation,
} from 'redux/user/userApi';
import { setBalance } from 'redux/Balance/balanceSlice';
import { getNormalizedSum } from 'helpers/getNormalizedSum';
import s from './BalanceComp.module.css';

const BalanceComp = () => {
  const {
    data,
    isSuccess,
    // error,
    // isLoading
  } = useGetBalanceQuery();
  // console.log('balance from api', data);
  const [value, setValue] = useState('');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isShowPopUp, setIsShowPopUp] = useState(true);
  const dispatch = useDispatch();
  const [changeBalance] = useChangeBalanceMutation();
  const sum = useSelector(state => state.sum);

  useEffect(() => {
    if (sum) {
      const changedBalance = data - Number(sum);
      dispatch(setBalance(getNormalizedSum(changedBalance)));
      setValue(getNormalizedSum(changedBalance));
      return;
    }

    if (isSuccess && !sum) {
      dispatch(setBalance(getNormalizedSum(data)));
      setValue(getNormalizedSum(data));
    }
  }, [data, dispatch, isSuccess, sum]);

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
    </>
  );
};

export default BalanceComp;
