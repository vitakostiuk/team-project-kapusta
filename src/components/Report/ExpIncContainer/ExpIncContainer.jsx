import React, { useState, useEffect } from 'react';
import s from './ExpIncContainer.module.css';
import IncomeExpensesChange from './IncomeExpensesChange';
import Expenses from './Expenses';
import Income from './Income';
import Statistic from '../Statistic';
// import { pullCategories } from 'helpers/pullCategories';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';

const ExpIncContainer = () => {
  const { data, refetch } = useGetTransactionsQuery();
  console.log(data);

  const [incExp, setIncExp] = useState('EXPENSES');

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
    <>
      <div className={s.container}>
        <IncomeExpensesChange onChange={incExpChange} incExp={incExp} />

        {incExp === 'EXPENSES' ? <Expenses /> : <Income />}
      </div>
      <Statistic />
    </>
  );
};

export default ExpIncContainer;
