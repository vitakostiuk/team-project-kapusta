import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import PopUp from 'components/common/PopUp';
import BtnConfirm from '../BtnConfirm';
import {
  useGetBalanceQuery,
  useChangeBalanceMutation,
} from 'redux/user/userApi';
import { setBalance } from 'redux/Balance/balanceSlice';
import { setbalanceNum } from 'redux/Balance/balanceNum';
import { getNormalizedSum } from 'helpers/getNormalizedSum';
import s from './BalanceComp.module.css';

const BalanceComp = () => {
  const {
    data,
    isSuccess,
    // error,
    // isLoading
  } = useGetBalanceQuery({}, { refetchOnMountOrArgChange: true });
  const [value, setValue] = useState('');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isShowPopUp, setIsShowPopUp] = useState(true);
  const dispatch = useDispatch();
  const [changeBalance] = useChangeBalanceMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setBalance(getNormalizedSum(data)));
      dispatch(setbalanceNum(data));
      setValue(getNormalizedSum(data));
    }
  }, [data, dispatch, isSuccess]);

  const handleChange = e => {
    setValue(e.target.value);
    setIsDisabledBtn(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (value.length > 7) {
      let myColor = { background: 'red', text: '#FFFFFF' };
      notify.show('Amount must not exceed 7 digits', 'custom', 5000, myColor);
      return;
    }

    setValue(getNormalizedSum(value));
    setIsShowPopUp(false);
    try {
      const { data } = await changeBalance({ balance: Number(value) });
      dispatch(setBalance(getNormalizedSum(data.balance)));
    } catch (error) {}
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
          <BtnConfirm isDisabledBtn={isDisabledBtn} />
        </div>
      </form>
      <Notifications />
      {data === 0 && isShowPopUp && <PopUp />}
    </>
  );
};

export default BalanceComp;
