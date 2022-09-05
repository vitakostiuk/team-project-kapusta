import InputForm from 'components/Table/InputForm/InputForm';
import Home from '../../components/Home';
import style from './IncomePage.module.css';

const IncomePage = () => {
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

export default IncomePage;
