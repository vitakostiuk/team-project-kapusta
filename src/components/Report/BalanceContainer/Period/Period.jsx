import React, { useState, useEffect } from 'react';
import s from './Period.module.css';
import Arrow from '../../../../images/report/sprite-icons.svg';
import { useDispatch } from 'react-redux';
import { setData } from 'redux/report/reportDateSlice';

const Period = () => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState('');

  const dispatch = useDispatch();

  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  useEffect(() => {
    const number = (month + 1).toString().padStart(2, '0');
    dispatch(
      setData({
        month: number,
        year,
      }),
    );
  }, [dispatch, month, year]);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    setMonth(currentMonth);

    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
      return;
    }
    setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
      return;
    }
    setMonth(month + 1);
  };

  return (
    <div className={s.container}>
      <p className={s.period}>Current period:</p>
      <div className={s.periodWrapper}>
        <button className={s.btn} onClick={prevMonth}>
          <svg className={s.picture}>
            <use xlinkHref={`${Arrow}#icon-arrow-left`} />
          </svg>
        </button>

        <div className={s.date}>
          <p className={s.month}>{months[month]}</p>
          <p className={s.year}>{year}</p>
        </div>

        <button className={s.btn} onClick={nextMonth}>
          <svg className={s.picture}>
            <use xlinkHref={`${Arrow}#icon-arrow-right`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Period;
