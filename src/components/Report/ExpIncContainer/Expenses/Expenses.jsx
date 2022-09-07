import React, { useState, useEffect } from 'react';
import s from './Expenses.module.css';
import Category from '../Category';
import { useRef } from 'react';

const Expenses = ({ data, onChange }) => {
  const [category, setCategory] = useState('');
  const [sorted, setSorted] = useState([]);
  const firstCall = useRef(true);

  useEffect(() => {
    setCategory('');
  }, [data]);

  useEffect(() => {
    if (!data?.length) return;
    const arr = [...data].sort((a, b) => b.summary - a.summary);
    if (arr.length) {
      setSorted(arr);
      onChange(arr[0].data);
      if (category === '') setCategory(arr[0].categories);
    }
    if (firstCall.current) {
      firstCall.current = false;
    }
  }, [category, data, onChange]);

  useEffect(() => {
    if (!data) {
      setCategory('');
      onChange([]);
      return;
    }
    const arr = [...data]?.find(el => el.categories === category);
    if (arr) {
      onChange(arr?.data || []);
    }
  }, [category, data, onChange]);

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
      {!data && (
        <p style={{ padding: '2em' }}>No operations found for this period.</p>
      )}
    </>
  );
};

export default Expenses;
