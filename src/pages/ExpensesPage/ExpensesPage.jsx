import { useState } from 'react';
import InputForm from 'components/Table/InputForm/InputForm';
import Home from '../../components/Home';
import style from './ExpensesPage.module.css';

const ExpensesPage = () => {
  const [tableDate, setTableDate] = useState('');
  const [tableDescription, setTableDescription] = useState('');
  const [tableSum, setTableSum] = useState('');
  const [tableCategory, setTableCategory] = useState('');

  const onFillTable = (date, description, sum, category) => {
    setTableDate(date);
    setTableDescription(description);
    setTableSum(sum);
    setTableCategory(category);
  };

  return (
    <>
      <div className={style.mobile}>
        <InputForm onFillTable={onFillTable} />
      </div>

      <div className={style.desktop}>
        <Home />
      </div>
    </>
  );
};

export default ExpensesPage;
