import Balance from 'components/Balance';
import Summary from './Summary';
import Tabs from 'components/Table/Tabs/Tabs';
import InputForm from 'components/Table/InputForm/InputForm';
import TableBody from 'components/Table/InputForm/TableBody/TableBody';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.descktop}>
        <Balance />
        <Tabs />
        <InputForm />
        <div className={style.tableThamb}>
          <TableBody />
          <Summary />
        </div>
      </div>

      <div className={style.tablet}>
        <Balance />
        <Tabs />
        <InputForm />
        <div className={style.tableThamb}>
          <TableBody />
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
