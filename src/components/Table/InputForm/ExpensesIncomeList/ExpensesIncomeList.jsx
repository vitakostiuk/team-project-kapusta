import style from './ExpensesIncomeList.module.css';
import EllipsisText from 'react-ellipsis-text';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';

const ExpensesIncomeList = () => {
  return (
    <div className={style.thamb}>
      <ul className={style.expensesIncomeList}>
        <li className={style.item}>
          <span className={style.itemName}>
            <EllipsisText
              text={'Metro (Lorem ipsum dolor dolor dolor dolorsit)'}
              length={'15'}
            />
          </span>
          <br />
          <span className={style.itemDate}>05.09.2019</span>
          <span className={style.itemCategory}>Transport</span>
          <hr className={style.line} />
        </li>
        <li className={style.item}>
          <span className={style.itemName}>
            <EllipsisText text={'Bananas'} length={'15'} />
          </span>
          <br />
          <span className={style.itemDate}>05.09.2019</span>
          <span className={style.itemCategory}>Products</span>
          <hr className={style.line} />
        </li>
        <li className={style.item}>
          <span className={style.itemName}>
            <EllipsisText text={'My salary'} length={'15'} />
          </span>
          <br />
          <span className={style.itemDate}>05.09.2019</span>
          <span className={style.itemCategory}>Salary</span>
          <hr className={style.line} />
        </li>
      </ul>
      <ul className={style.expensesIncomeSum}>
        <li className={style.itemSum}>
          <span className={style.sum}>- 30.00 UAH</span>
        </li>
        <li className={style.itemSum}>
          <span className={style.sum}>- 50.00 UAH</span>
        </li>
        <li className={style.itemSum}>
          <span className={style.sum}>20 000.00 UAH</span>
        </li>
      </ul>
      <ul className={style.expensesIncomeDel}>
        <li className={style.itemDel}>
          <button type="button" className={style.deleteBtn}>
            <DeletePic />
          </button>
        </li>
        <li className={style.itemDel}>
          <button type="button" className={style.deleteBtn}>
            <DeletePic />
          </button>
        </li>
        <li className={style.itemDel}>
          <button type="button" className={style.deleteBtn}>
            <DeletePic />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ExpensesIncomeList;
