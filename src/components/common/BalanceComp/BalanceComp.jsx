import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import EllipsisText from 'react-ellipsis-text';
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
//ev-team-project-kapusta.netlify.app/?token=ya29.a0AVA9y1sV8jJuU4xkx8q42gGTJh4j7F5jMKo0Yhm0VGAkpyBLKHzTxuT5aqM9ogvo4O7z613t1-NFEdXEtxfb3SSIU6wPdZ9UaKlBrn4lTksBT71GyB91Y4vN1r6vpdB5OLICSbr4DdMJ4kTmrnFaKWtWg5LFaCgYKATASARISFQE65dr88BWkp_IxJ6Y7RkbIs-Kuyw0163&email=dovgand887@gmail.com
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
            title={value}
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
