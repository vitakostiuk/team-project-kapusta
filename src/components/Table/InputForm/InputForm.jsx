import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import { ReactComponent as CalcPic } from '../../../images/calculator.svg';
import { ReactComponent as BackPic } from '../../../images/arrow-left.svg';
import SelectList from '../InputForm/SelectList/SelectList';
import Calendar from './Calendar/Calendar';
import style from './InputForm.module.css';

const InputForm = ({ onFillTable }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');

  const onChangeDate = date => {
    setStartDate(date);
  };

  const onChangeCategory = data => {
    setCategory(data);
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

    const year = startDate.getFullYear();
    const month = String(startDate.getMonth()).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');
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
      sum,
      category,
    };

    onFillTable(
      normalizedDate,
      description,
      category,
      normalizedSum,
      tableValues,
    );

    reset();
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

          <SelectList onChangeCategory={onChangeCategory} />

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
