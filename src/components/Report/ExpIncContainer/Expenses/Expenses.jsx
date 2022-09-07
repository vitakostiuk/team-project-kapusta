import React, { useState, useEffect } from 'react';
import s from './Expenses.module.css';
import Category from '../Category';
import Statistic from 'components/Report/Statistic';
import { useRef } from 'react';

const Expenses = ({ data, onChange }) => {
  const [category, setCategory] = useState('');
  const [sorted, setSorted] = useState([]);
  const [subs, setSubs] = useState([]);
  const firstCall = useRef(true);

  useEffect(() => {
    if (!data?.length) return;
    const arr = [...data].sort((a, b) => b.summary - a.summary);
    if (arr.length) {
      setSorted(arr);
    }
    if (firstCall.current) {
      setCategory(arr[0].categories);
      onChange(arr[0].data);
      firstCall.current = false;
    }
  }, [data, onChange]);

  useEffect(() => {
    if (!data) {
      onChange([]);
      return;
    }
    const arr = [...data]?.find(el => el.categories === category);
    if (arr) {
      setSubs(arr?.data || []);
      onChange(arr?.data || []);
    } else {
      setSubs([...data][0]?.data || []);
      onChange([...data][0]?.data || []);
      setCategory([...data][0]?.categories);
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
