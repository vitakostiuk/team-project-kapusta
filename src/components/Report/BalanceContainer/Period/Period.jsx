import React, { useState, useEffect } from 'react';
import s from './Period.module.css';
import Arrow from '../../Arrow';
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
    dispatch(
      setData({
        month,
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
          <Arrow />
        </button>

        <div className={s.date}>
          <p className={s.month}>{months[month]}</p>
          <p className={s.year}>{year}</p>
        </div>

        <button className={s.btn} onClick={nextMonth}>
          <Arrow rotate="true" />
        </button>
      </div>
    </div>
  );
};

export default Period;
