import React, { useState, useEffect } from 'react';
import s from './Expenses.module.css';
import IncomeExpensesChange from './IncomeExpensesChange';
import Category from './Category';
// import Statistic from '../Statistic';
import {
  useGetTransactionsQuery,
  useGetTransactionsByExpenseQuery,
} from 'redux/report/transactionsApi';

const Expenses = () => {
  const [incExp, setIncExp] = useState('EXPENSES');
  const [categories, setCategories] = useState([]);

  // const { data, refetch } = useGetTransactionsQuery();
  const { data, refetch } = useGetTransactionsByExpenseQuery();
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

  // useEffect(() => {
  // const trans = data.transactions
  // let tr = []
  // console.log(trans)

  // trans.reduce((prevTransaction, transaction) => {
  //   // prevTransaction.categories !== transaction.categories ?
  //   // setCategories(prevState => [...prevState, transaction]) :
  //   // setCategories(prevState => [...prevState, ])
  //   if(prevTransaction.categories !== transaction.categories) {
  //     tr.push(transaction)
  //   } else {
  //     Number(prevTransaction.price + transaction.price)
  //   }
  // })
  // console.log(tr)

  // setCategories(data.transactions)
  // categories.forEach(category => {
  //   if(category.categories !== data.transactions.categories) {
  //     setCategories(data.transactions)
  //   } else {
  //     return category.price + data.transactions.price
  //   }})

  // }, [categories, data])

  // const oneCategory = (transaction) => {
  //   categories.forEach(category => {
  //     if(category.categories !== transaction.categories) {
  //       setCategories(transaction)
  //     } else {
  //       return category.price + transaction.price
  //     }})
  // }

  //   prevState.categories === data.transactions.categories ?
  //   prevState.price + data.transactions.price :
  //   data.transactions))

  // oneCategory(data.transactions)

  console.log(categories);
  return (
    <div className={s.container}>
      <IncomeExpensesChange onChange={incExpChange} incExp={incExp} />

      {/* {data && (
        <ul className={s.categories}>
          {data.data?.map(({ _id, title }) => (
            <Category key={_id} name={title} />
          ))}
        </ul>
      )} */}

      {data && (
        <ul className={s.categories}>
          {data.transactions?.map(({ _id, price, categories }) => (
            <Category key={_id} price={price} categories={categories} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expenses;
