import style from './SelectList.module.css';
// import { useState, useEffect } from 'react';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';

const SelectList = () => {
  const { data } = useGetTransactionsQuery();

  return (
    <select
      className={style.selectList}
      name="category"
      title="Select an item from the list"
      required
    >
      <option className={style.selectItem} value="Product category">
        Product category
      </option>
      {data &&
        data.data?.map(({ _id, title }) => (
          <option key={_id} value={title} className={style.selectItem}>
            {title}
          </option>
        ))}
    </select>
  );
};

export default SelectList;
