import React, { useState } from 'react';
import s from './Expenses.module.css';
import IncomeExpensesChange from './IncomeExpensesChange';
import Category from './Category';
// import Statistic from '../Statistic';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';

const Expenses = () => {
  const [incExp, setIncExp] = useState('EXPENSES');

  const { data, refetch } = useGetTransactionsQuery();
  console.log(data);

  const incExpChange = () => {
    switch (incExp) {
      case 'EXPENSES':
        setIncExp('INCOME');
        break;
      case 'INCOME':
        setIncExp('EXPENSES');
        break;

      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <IncomeExpensesChange onChange={incExpChange} incExp={incExp} />

      {data && (
        <ul className={s.categories}>
          {data.data?.map(({ _id, title }) => (
            <Category key={_id} name={title} />
          ))}
        </ul>
      )}

      {/* <Statistic /> */}
    </div>
  );
};

export default Expenses;
