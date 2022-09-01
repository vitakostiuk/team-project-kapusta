import React, { useState, useEffect } from 'react';
import s from './Period.module.css';
import Arrow from '../Arrow';

const Period = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

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
    const currentMonth = months[new Date().getMonth()];
    setMonth(currentMonth);

    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const prevMonth = () => {
    if (month === 'JANUARY') {
      setYear(year - 1);
      setMonth('DECEMBER');
      return;
    }
    setMonth(months[months.indexOf(month) - 1]);
  };

  const nextMonth = () => {
    if (month === 'DECEMBER') {
      setYear(year + 1);
      setMonth('JANUARY');
      return;
    }
    setMonth(months[months.indexOf(month) + 1]);
  };

  return (
    <div className={s.container}>
      <p className={s.period}>Current period:</p>
      <div className={s.periodWrapper}>
        <button className={s.btn} onClick={prevMonth}>
          <Arrow />
        </button>

        <div className={s.date}>
          <p className={s.month}>{month}</p>
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
