import React, { useState, useEffect } from 'react';
import s from './Expenses.module.css';
import Category from '../Category';
import Statistic from '../../Statistic';

const Expenses = ({ data }) => {
  const [category, setCategory] = useState('');
  const [sorted, setSorted] = useState([]);
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    if (!data?.length) return;
    const arr = [...data].sort((a, b) => b.summary - a.summary);
    if (arr.length) {
      setCategory(arr[0]._id);
      setSorted(arr);
    }
  }, [data]);

  useEffect(() => {
    const arr = [...data]?.find(el => el.categories === category);
    setSubs(arr?.data || []);
  }, [category]);

  return (
    <>
      {data && (
        <ul className={s.categories}>
          {sorted.map((el, idx) => (
            <Category
              key={idx}
              active={el.categories === category ? true : false}
              details={el.summary}
              categories={el.categories}
              onChange={setCategory}
            />
          ))}
        </ul>
      )}
      {data?.length > 0 ? (
        <Statistic list={subs} />
      ) : (
        <div className={s.noData}>
          There are no transactions for selected period.
        </div>
      )}
    </>
  );
};

export default Expenses;
