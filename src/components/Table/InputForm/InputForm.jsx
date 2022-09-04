import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import { ReactComponent as CalcPic } from '../../../images/calculator.svg';
import { ReactComponent as BackPic } from '../../../images/arrow-left.svg';
import SelectList from '../InputForm/SelectList/SelectList';
import Calendar from './Calendar/Calendar';
import {
  useSetTransactionExpenseMutation,
  useSetTransactionIncomeMutation,
} from 'redux/report/transactionsApi';
import { addTransaction } from 'redux/report/transactionsSlice';
import style from './InputForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

const InputForm = ({ onFillTable }) => {
  const [startDate, setStartDate] = useState(new Date());
  // const [year, setYear] = useState('');
  // const [month, setMonth] = useState('');
  // const [day, setDay] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [idOfCategory, setIdOfCategory] = useState('');
  const [addExpense] = useSetTransactionExpenseMutation();
  const [addIncome] = useSetTransactionIncomeMutation();
  const dispatch = useDispatch();

  const type = useLocation().pathname;
  // console.log('type', type);

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
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const year = String(startDate.getFullYear());
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

    // setYear(String(startDate.getFullYear()));
    // setMonth(String(startDate.getMonth()));
    // setDay(String(startDate.getDate()));
    const normalizedDate = `${day}.${month}.${year}`;
    const normalizedSum = Number(sum)
      .toLocaleString('cs-CZ', {
        style: 'currency',
        currency: 'UAH',
      })
      .replace(',', '.');

    const tableValues = {
      date: normalizedDate,
      description,
      sum: normalizedSum,
      category,
      income: type === '/expenses' ? false : true,
      id: nanoid(),
    };
    dispatch(addTransaction(tableValues));

    onFillTable(
      normalizedDate,
      description,
      category,
      normalizedSum,
      tableValues,
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
      addExpense(requestBody);
    }
    if (type === '/income') {
      addIncome(requestBody);
    }

    // reset();
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
            type="submit"
            className={style.inputBtn}
            onClick={handleSubmit}
          >
            Input
          </button>

          <button type="button" onClick={reset} className={style.clearBtn}>
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
