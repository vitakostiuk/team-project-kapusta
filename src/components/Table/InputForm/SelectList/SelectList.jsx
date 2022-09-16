import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';
import './SelectList.scss';

const SelectList = ({ onChangeCategory, onChangeId }) => {
  const [categoriesExpense, setCategoriesExpense] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const { data } = useGetTransactionsQuery();

  const type = useLocation().pathname;

  useEffect(() => {
    if (data) {
      const categories = data.data?.map(({ _id, title, type }) => ({
        id: _id,
        title,
        type,
      }));

      setCategoriesExpense(
        categories.filter(category => category.type === 'expenses'),
      );
      setCategoriesIncome(
        categories.filter(category => category.type === 'income'),
      );

      const findId = categories.find(category => category.title === value);
      if (findId) {
        setId(findId.id);
        onChangeId(findId.id);
      }
    }
  }, [data, onChangeId, value]);

  const handleChangeCategory = e => {
    setValue(e.value);
    onChangeCategory(e.value);
  };

  const optionsExpense = categoriesExpense.map(({ title }) => ({
    value: `${title}`,
    label: `${title}`,
  }));

  const optionsIncome = categoriesIncome.map(({ title }) => ({
    value: `${title}`,
    label: `${title}`,
  }));

  return (
    <>
      {(type === '/expenses' || type === '/expenses/input') && (
        <Select
          classNamePrefix="custom-select"
          onChange={handleChangeCategory}
          required
          options={optionsExpense}
          placeholder="Product category"
          isSearchable={false}
        />
      )}

      {(type === '/income' || type === '/income/input') && (
        <Select
          classNamePrefix="custom-select"
          name="category"
          onChange={handleChangeCategory}
          required
          options={optionsIncome}
          placeholder="Product category"
          isSearchable={false}
        />
      )}
    </>
  );
};

export default SelectList;
