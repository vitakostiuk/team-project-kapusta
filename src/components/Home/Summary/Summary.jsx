// import { useState, useEffect } from 'react';
// import axios from 'axios';
import s from './Summary.module.css';

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  // 7: 'July',
  // 8: 'August',
  // 9: 'September',
  // 10: 'October',
  // 11: 'November',
  // 12: 'December',
};
const values = Object.values(months);
console.log(values);

const Summary = () => {
  // useEffect(() => {
  //   const getMonths = async () => {
  //     const months = axios.get('http://localhost:3000');
  //   };
  //   getMonths();
  // }, []);
  return (
    <div className={s.container}>
      <p className={s.title}>Summary</p>
      <ul className={s.list}>
        {values.map((month, index) => (
          <li key={index} className={s.item}>
            <p className={s.month}>{month}</p>
            <p className={s.sum}>10 000.00</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
