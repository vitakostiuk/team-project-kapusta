import { useState } from 'react';
import Balance from 'components/Balance';
import Summary from './Summary';
import Tabs from 'components/Table/Tabs/Tabs';
import InputForm from 'components/Table/InputForm/InputForm';
import TableBody from 'components/Table/InputForm/TableBody/TableBody';
import style from './Home.module.css';

const Home = () => {
  const [dataTable, setDataTable] = useState([]);
  const [tableDate, setTableDate] = useState('');
  const [tableDescription, setTableDescription] = useState('');
  const [tableSum, setTableSum] = useState('');
  const [tableCategory, setTableCategory] = useState('');

  const onFillTable = (date, description, sum, category, tableValues) => {
    setTableDate(date);
    setTableDescription(description);
    setTableSum(sum);
    setTableCategory(category);
    setDataTable(prevDataTable => [...prevDataTable, tableValues]);
  };
  return (
    <>
      <div className={style.descktop}>
        <Balance />
        <Tabs />
        <InputForm onFillTable={onFillTable} />
        <div className={style.tableThamb}>
          <TableBody dataTable={dataTable} />
          <Summary />
        </div>
      </div>

      <div className={style.tablet}>
        <Balance />
        <Tabs />
        <InputForm onFillTable={onFillTable} />
        <div className={style.tableThamb}>
          <TableBody dataTable={dataTable} />
        </div>
        <Summary />
      </div>

      <div className={style.mobile}>
        <Balance />
        <Tabs />
      </div>
    </>
  );
};

export default Home;
