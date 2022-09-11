import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Period.module.css';
import Arrow from '../../../../images/report/sprite-icons.svg';
import { setData } from 'redux/report/reportDateSlice';
import { useFetchCurrentUserQuery } from 'redux/authorization/authApi';

const Period = () => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState('');
  const [isDisabledBtnLeft, setIsDisabledBtnLeft] = useState(false);
  const [isDisabledBtnRight, setIsDisabledBtnRight] = useState(false);

  const period = useSelector(state => state.dateReport);
  const { data } = useFetchCurrentUserQuery(
    {},
    { refetchOnMountOrArgChange: true },
  );
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
    const registerDate = data?.user?.createdAt.split('-')[1];
    if (period.month === registerDate) {
      setIsDisabledBtnLeft(true);
    } else {
      setIsDisabledBtnLeft(false);
    }

    const currentMonth = (new Date().getMonth() + 1)
      .toString()
      .padStart(2, '0');
    if (period.month === currentMonth) {
      setIsDisabledBtnRight(true);
    } else {
      setIsDisabledBtnRight(false);
    }

    const number = (month + 1).toString().padStart(2, '0');
    dispatch(
      setData({
        month: number,
        year,
      }),
    );
  }, [data?.user?.createdAt, dispatch, month, period.month, year]);

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
        <button
          className={!isDisabledBtnLeft ? s.btn : s.buttonDisabled}
          onClick={prevMonth}
          disabled={isDisabledBtnLeft}
        >
          <svg className={s.picture}>
            <use xlinkHref={`${Arrow}#icon-arrow-left`} />
          </svg>
        </button>

        <div className={s.date}>
          <p className={s.month}>{months[month]}</p>
          <p className={s.year}>{year}</p>
        </div>

        <button
          className={!isDisabledBtnRight ? s.btn : s.buttonDisabled}
          onClick={nextMonth}
          disabled={isDisabledBtnRight}
        >
          <svg className={s.picture}>
            <use xlinkHref={`${Arrow}#icon-arrow-right`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Period;
