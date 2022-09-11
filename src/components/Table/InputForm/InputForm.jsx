import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import { ReactComponent as CalcPic } from '../../../images/calculator.svg';
import { ReactComponent as BackPic } from '../../../images/arrow-left.svg';
import SelectList from '../InputForm/SelectList/SelectList';
import Calendar from './Calendar/Calendar';
import {
  useSetTransactionExpenseMutation,
  useSetTransactionIncomeMutation,
} from 'redux/report/transactionsApi';
import style from './InputForm.module.css';

const InputForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [idOfCategory, setIdOfCategory] = useState('');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [addExpense] = useSetTransactionExpenseMutation();
  const [addIncome] = useSetTransactionIncomeMutation();
  const toastId = useRef(null);

  useEffect(() => {
    if (!description || !sum || !category) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(false);
    }
  }, [category, description, sum]);

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
    }
  };

  const notifyError = message => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error(message, { icon: '😤' });
    }
  };

  const notifySuccess = message => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success(message, { icon: '😎' });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    reset();

    const year = String(startDate.getFullYear());
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

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
      return addExpense(requestBody)
        .unwrap()
        .then(payload => {
          if (payload?.code === 409) return notifyError(payload?.message);

          return payload;
        })
        .catch(error => console.log('rejected', error));
    }
    if (type === '/income') {
      return addIncome(requestBody);
    }
    if (type === '/expenses/input') {
      const message = 'The Transaction added successfully';
      notifySuccess(message);
      return addExpense(requestBody);
    }
    if (type === '/income/input') {
      const message = 'The Transaction added successfully';
      notifySuccess(message);
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
            <Link
              to="/"
              className={style.backBtn}
              type="button"
              onClick={e => {
                window.location.reload();
              }}
            >
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
              pattern="^[0-9]+$"
              onChange={handleChange}
            />
            <div className={style.hidenBox}></div>
            <div className={style.CalcPic}>
              <CalcPic />
            </div>
          </label>
        </div>

        <div className={style.btnThamb}>
          <button
            type="input"
            onClick={handleSubmit}
            disabled={isDisabledBtn}
            className={isDisabledBtn ? style.inputBtnDisabled : style.inputBtn}
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
