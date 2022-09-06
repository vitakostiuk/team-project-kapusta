import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import { ReactComponent as CalcPic } from '../../../images/calculator.svg';
import { ReactComponent as BackPic } from '../../../images/arrow-left.svg';
import SelectList from '../InputForm/SelectList/SelectList';
import Calendar from './Calendar/Calendar';
import {
  useSetTransactionExpenseMutation,
  useSetTransactionIncomeMutation,
} from 'redux/report/transactionsApi';
// import { setSumValue } from 'redux/Balance/sumSlice';
import style from './InputForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

const InputForm = ({ onFillTable }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [idOfCategory, setIdOfCategory] = useState('');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [addExpense] = useSetTransactionExpenseMutation();
  const [addIncome] = useSetTransactionIncomeMutation();

  const balance = useSelector(state => state.balanceNum);

  useEffect(() => {
    if (!description || !sum || !category) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(false);
    }
  }, [category, description, sum]);

  // const dispatch = useDispatch();
  const type = useLocation().pathname;

  const onChangeDate = date => {
    setStartDate(date);
  };

  const onChangeCategory = data => {
    setCategory(data);
  };

  const onChangeId = id => {
    setIdOfCategory(id);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'description') {
      setDescription(value);
    }
    if (name === 'sum') {
      setSum(value);
      // dispatch(setSumValue(value));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    reset();

    if (sum.length > 10) {
      let myColor = { background: 'red', text: '#FFFFFF' };
      notify.show('Amount must not exceed 11 digits', 'custom', 5000, myColor);
      return;
    }

    if (balance - Number(sum) < 0) {
      let myColor = { background: 'red', text: '#FFFFFF' };
      notify.show('The balance cannot be negative', 'custom', 5000, myColor);
      return;
    }

    const year = String(startDate.getFullYear());
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

    const normalizedDate = `${day}.${month}.${year}`;

    const tableValues = {
      date: normalizedDate,
      description,
      sum,
      category,
      income: type === '/expenses' ? false : true,
      id: nanoid(),
    };
    toast.success('Transaction was added');

    onFillTable(
      normalizedDate,
      description,
      category,
      sum,
      tableValues,
      isDisabledBtn,
    );
    const requestBody = {
      date: {
        day,
        month,
        year,
      },
      description,
      categories: idOfCategory,
      value: sum,
    };
    if (type === '/expenses') {
      return addExpense(requestBody);
    }
    if (type === '/income') {
      return addIncome(requestBody);
    }
    if (type === '/expenses/input') {
      return addExpense(requestBody);
    }
    if (type === '/income/input') {
      return addIncome(requestBody);
    }
  };

  const reset = () => {
    setDescription('');
    setSum('');
  };

  return (
    <>
      <form className={style.inputForm} onSubmit={handleSubmit}>
        <div className={style.inputThamb}>
          <div className={style.calendarBox}>
            <div className={style.calendarPic}>
              <CalendarPic />
            </div>

            <Calendar onChangeDate={onChangeDate} startDate={startDate} />
          </div>

          <div className={style.backBtnThamb}>
            <Link to="/" className={style.backBtn} type="button">
              <BackPic />
            </Link>
          </div>

          <label className={style.label}>
            <input
              type="text"
              name="description"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Product description may contain only letters, apostrophe, dash and spaces"
              required
              placeholder="Product description"
              minLength={1}
              maxLength={50}
              className={style.inputArea}
              value={description}
              onChange={handleChange}
            />
          </label>

          <SelectList
            onChangeCategory={onChangeCategory}
            onChangeId={onChangeId}
          />

          <label className={style.sum}>
            <input
              type="number"
              name="sum"
              title="Sum may contain only numbers"
              required
              placeholder="00.00 UAH"
              className={style.sumInputArea}
              value={sum}
              onChange={handleChange}
            />
            <div className={style.CalcPic}>
              <CalcPic />
            </div>
          </label>
        </div>

        <div className={style.btnThamb}>
          <button
            type="input"
            className={style.inputBtn}
            onClick={handleSubmit}
            disabled={isDisabledBtn}
          >
            Input
          </button>
          <button type="button" onClick={reset} className={style.clearBtn}>
            Clear
          </button>
        </div>
      </form>
      <Notifications />
    </>
  );
};

export default InputForm;
