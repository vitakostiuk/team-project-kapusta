import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetSummaryTransactionsQuery } from 'redux/report/transactionsApi';
import s from './Summary.module.css';

function changeMonthNumberToName(array) {
  const months = [];
  const newData = [];

  for (let i = 0; i < 12; i++) {
    months.push(
      new Date(2000, i, 1).toLocaleDateString('en-US', { month: 'long' }),
    );
  }

  array?.forEach(element => {
    const summaryObj = {
      name: months[element.month - 1],
      ...element,
    };

    newData.push(summaryObj);
  });

  return newData;
}

const Summary = () => {
  const currentLocation = useLocation();
  const type = currentLocation?.pathname.slice(1);
  const { data } = useGetSummaryTransactionsQuery(type);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    setSummary(() => changeMonthNumberToName(data?.transactions));
  }, [data]);

  return (
    <div className={s.container}>
      <p className={s.title}>Summary</p>
      <ul className={s.list}>
        {summary?.map(({ name, month, total }) => (
          <li key={month} className={s.item}>
            <p className={s.month}>{name}</p>
            <p className={s.sum}>{total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
