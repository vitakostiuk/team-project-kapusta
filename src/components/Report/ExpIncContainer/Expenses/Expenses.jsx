import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './Expenses.module.css';
import Category from '../Category';
import Statistic from '../../Statistic';
// import { pullCategories } from 'helpers/pullCategories';
import { useGetTransactionsByExpenseQuery } from 'redux/report/transactionsApi';
import { setExpenses } from 'redux/report/expensesSlice';

const Expenses = ({ data }) => {
  const [category, setCategory] = useState('');
  const [sorted, setSorted] = useState([]);

  // const dispatch = useDispatch();
  // const [categories, setCategories] = useState([]);

  // const { data, refetch } = useGetTransactionsByExpenseQuery();

  // useEffect(() => {
  //   const generalSum = data?.transactions.reduce((acc, el) => {
  //     const { value } = el;
  //     return (acc += value);
  //   }, 0);

  //   dispatch(setExpenses(generalSum));
  // }, [data, dispatch]);

  // useEffect(() => {
  //   const result = data?.transactions.reduce((acc, el) => {
  //     const { description, value, categories } = el;
  //     const res = acc;

  //     if (!res[categories]) res[categories] = {};

  //     res[categories].sum = res[categories].sum
  //       ? res[categories].sum + value
  //       : value;

  //     if (!res[categories].sub) res[categories].sub = {};

  //     res[categories].sub[description] = res[categories].sub[description]
  //       ? res[categories].sub[description] + value
  //       : value;

  //     return res;
  //   }, {});

  //   setCategories(result);
  // }, [data, dispatch]);

  useEffect(() => {
    const arr = Object.entries(data)?.sort((a, b) => b[1].sum - a[1].sum);
    if (arr.length) {
      setCategory(arr[0][0]);
      setSorted(arr);
    }
  }, [data]);

  return (
    <>
      {sorted && (
        <ul className={s.categories}>
          {sorted.map((el, idx) => (
            <Category
              key={idx}
              details={el[1]}
              categories={el[0]}
              onChange={setCategory}
            />
          ))}
        </ul>
      )}
      {data[category] && <Statistic list={data[category].sub} />}
    </>
  );
};

export default Expenses;
