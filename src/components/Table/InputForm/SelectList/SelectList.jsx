import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './SelectList.module.css';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';

const SelectList = ({ onChangeCategory, onChangeId }) => {
  const [categoriesExpense, setCategoriesExpense] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const { data } = useGetTransactionsQuery();

  const type = useLocation().pathname;
  // console.log('type', type);

  useEffect(() => {
    if (data) {
      const categories = data.data?.map(({ _id, title, type }) => ({
        id: _id,
        title,
        type,
      }));
      // console.log('categories', categories);
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
        // console.log('findId', findId.id);
      }
    }
  }, [data, id, onChangeId, value]);

  const handleChangeCategory = e => {
    setValue(e.target.value);
    onChangeCategory(e.target.value);
  };

  return (
    <select
      className={style.selectList}
      name="category"
      title="Select an item from the list"
      onChange={handleChangeCategory}
      required
    >
      <option className={style.selectItem} value="Product category">
        Product category
      </option>
      {type === '/expenses' &&
        categoriesExpense.map(({ _id, title }) => (
          <option key={title} value={title} className={style.selectItem}>
            {title}
          </option>
        ))}
      {type === '/income' &&
        categoriesIncome.map(({ _id, title }) => (
          <option key={title} value={title} className={style.selectItem}>
            {title}
          </option>
        ))}
    </select>
  );
};

export default SelectList;
