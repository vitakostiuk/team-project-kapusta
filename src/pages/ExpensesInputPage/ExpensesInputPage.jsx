import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputForm from 'components/Table/InputForm/InputForm';
import style from './ExpensesInputPage.module.css';

const ExpensesInputPage = () => {
  const date = useSelector(state => state.date);
  console.log('date in ExpensesInputPage', date);
  const [mobileDate, setMobileDate] = useState(null);
  // console.log('mobileDate', mobileDate);

  useEffect(() => {
    setMobileDate(date);
  }, []);

  return (
    <>
      <div className={style.mobile}>
        <InputForm mobileDate={mobileDate} />
      </div>
    </>
  );
};

export default ExpensesInputPage;
