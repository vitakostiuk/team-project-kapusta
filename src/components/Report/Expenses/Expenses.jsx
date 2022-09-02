import React from 'react';
import s from './Expenses.module.css';
import Category from './Category';
import Arrow from '../Arrow';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';

const Expenses = () => {
  const { data, refetch } = useGetTransactionsQuery();
  console.log(data);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Arrow />
        <p className={s.text}>EXPENSES</p>
        <Arrow rotate="true" />
      </div>

      {data && (
        <ul className={s.categories}>
          {data.data?.map(({ _id, title }) => (
            <Category key={_id} name={title} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expenses;
