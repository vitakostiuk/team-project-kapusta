import InputForm from 'components/Table/InputForm/InputForm';
import Home from '../../components/Home';
import style from './ExpensesPage.module.css';

const ExpensesPage = () => {
  return (
    <>
      <div className={style.mobile}>
        <InputForm />
      </div>

      <div className={style.desktop}>
        <Home />
      </div>
    </>
  );
};

export default ExpensesPage;
