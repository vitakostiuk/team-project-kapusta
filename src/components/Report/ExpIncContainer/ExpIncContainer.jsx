import React, { useState, useEffect } from 'react';
import s from './ExpIncContainer.module.css';
import IncomeExpensesChange from './IncomeExpensesChange';
import Expenses from './Expenses';
import Income from './Income';
import Statistic from '../Statistic';
// import { pullCategories } from 'helpers/pullCategories';
import {
  useGetTransactionsQuery,
  useGetTransactionsByIncomeQuery,
  useGetTransactionsByExpenseQuery,
} from 'redux/report/transactionsApi';
import { setExpenses } from 'redux/report/reportSlice';
import { useDispatch } from 'react-redux';

const ExpIncContainer = () => {
  const [incExp, setIncExp] = useState('EXPENSES');
  const [obj, setObj] = useState({});
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { data: income } = useGetTransactionsByIncomeQuery();
  const { data: expenses } = useGetTransactionsByExpenseQuery();

  const incExpChange = () => {
    switch (incExp) {
      case 'EXPENSES':
        setIncExp('INCOME');
        console.log(income, expenses);
        break;
      case 'INCOME':
        setIncExp('EXPENSES');
        console.log(income, expenses);
        break;

      default:
        return;
    }
  };

  const transform = object => {
    const result = object?.transactions.reduce((acc, el) => {
      const { description, value, categories } = el;
      const res = acc;

      if (!res[categories]) res[categories] = {};

      res[categories].sum = res[categories].sum
        ? res[categories].sum + value
        : value;

      if (!res[categories].sub) res[categories].sub = {};

      res[categories].sub[description] = res[categories].sub[description]
        ? res[categories].sub[description] + value
        : value;

      return res;
    }, {});
    return result;
  };

  useEffect(() => {
    if (incExp === 'INCOME' && income) setData(income);
    if (incExp === 'EXPENSES' && expenses) setData(expenses);
  }, [expenses, incExp, income]);

  useEffect(() => {
    console.log(data);
    if (!data.transactions) return;

    const generalSum = data?.transactions.reduce((acc, el) => {
      const { value } = el;
      return (acc += value);
    }, 0);

    const result = transform(data);

    dispatch(setExpenses(generalSum));
    setObj(result);
  }, [data, dispatch]);

  return (
    <>
      <div className={s.container}>
        <IncomeExpensesChange onChange={incExpChange} incExp={incExp} />

        {/* {incExp === 'EXPENSES' ? <Expenses /> : <Income />} */}
      </div>
      <Statistic list={data.data} />
    </>
  );
};

export default ExpIncContainer;
