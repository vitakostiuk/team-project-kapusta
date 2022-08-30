import { useState } from 'react';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import { ReactComponent as CalcPic } from '../../../images/calculator.svg';
import SelectList from '../InputForm/SelectList/SelectList';
import Calendar from './Calendar/Calendar';
import style from './InputForm.module.css';

const InputForm = () => {
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');

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

    setSum(
      Number(sum)
        .toLocaleString('cs-CZ', {
          style: 'currency',
          currency: 'UAH',
        })
        .replace(',', '.'),
    );

    reset();
  };

  const reset = () => {
    setDescription('');
    setSum('');
  };

  return (
    <>
      <form className={style.inputForm}>
        <div className={style.calendarBox}>
          <div className={style.calendarPic}>
            <CalendarPic />
          </div>

          <Calendar />
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

        <SelectList />

        <label className={style.sum}>
          <input
            type="number"
            name="sum"
            title="Sum may contain only numbers"
            required
            placeholder="0.00"
            className={style.sumInputArea}
            value={sum}
            onChange={handleChange}
          />
          <div className={style.CalcPic}>
            <CalcPic />
          </div>
        </label>

        <button
          type="submit"
          onSubmit={handleSubmit}
          className={style.inputBtn}
        >
          Input
        </button>

        <button type="button" onClick={reset} className={style.clearBtn}>
          Clear
        </button>
      </form>
    </>
  );
};

export default InputForm;