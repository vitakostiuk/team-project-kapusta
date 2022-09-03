import { useState } from 'react';
import Balance from 'components/Balance';
import Summary from './Summary';
import Tabs from 'components/Table/Tabs/Tabs';
import InputForm from 'components/Table/InputForm/InputForm';
import TableBody from 'components/Table/InputForm/TableBody/TableBody';
import style from './Home.module.css';

const Home = () => {
  const [date, setStartDate] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');

  const onFillTable = (date, description, sum, category) => {
    setStartDate(date);
    setDescription(description);
    setSum(sum);
    setCategory(category);
  };
  return (
    <>
      <div className={style.descktop}>
        <Balance />
        <Tabs />
        <InputForm onFillTable={onFillTable} />
        <div className={style.tableThamb}>
          <TableBody
            date={date}
            description={description}
            sum={sum}
            category={category}
          />
          <Summary />
        </div>
      </div>

      <div className={style.tablet}>
        <Balance />
        <Tabs />
        <InputForm onFillTable={onFillTable} />
        <div className={style.tableThamb}>
          <TableBody
            date={date}
            description={description}
            sum={sum}
            category={category}
          />
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
